import {
  ActionIcon,
  Box,
  Flex,
  Group,
  useComputedColorScheme,
  useMantineTheme
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import { Grid } from "@mantine/core";
import { useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { chunkArray } from "~/utils/helper";
import { ChevronLeftIcon, ChevronRightIcon } from "~/utils/icons";

type CustomCarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  itemsPerSlide?: number;
};

function CustomCarousel<T>({
  items,
  renderItem,
  itemsPerSlide: itemsPerSlideProp
}: CustomCarouselProps<T>) {
  const theme = useMantineTheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true
  });

  const isMd = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
  const isSm = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);

  let itemsPerSlide = itemsPerSlideProp ?? 1;

  if (!itemsPerSlideProp) {
    if (isMd) itemsPerSlide = 6;
    else if (isSm) itemsPerSlide = 4;
  }

  const grouped = chunkArray(items, itemsPerSlide);

  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    if (!embla) return;

    const onSelect = () => {
      setSelected(embla.selectedScrollSnap());
    };

    const update = () => {
      setCanPrev(embla.canScrollPrev());
      setCanNext(embla.canScrollNext());
    };

    embla.on("select", onSelect);
    embla.on("select", update);
    embla.on("reInit", update);

    onSelect();
    update();

    return () => {
      embla.off("select", onSelect);
      embla.off("select", update);
      embla.off("reInit", update);
    };
  }, [embla]);

  const slidesCount = embla?.scrollSnapList().length || 0;

  return (
    <Box>
      <Flex align={"center"}>
        <ActionIcon
          onClick={() => embla?.scrollPrev()}
          visibleFrom="sm"
          bdrs={"100%"}
          opacity={canPrev ? "100%" : "50%"}
          bg={theme.colors.blue[5]}
        >
          <ChevronLeftIcon />
        </ActionIcon>

        <Carousel
          slideSize="100%"
          w={"100%"}
          key={itemsPerSlide}
          withIndicators={false}
          withControls={false}
          getEmblaApi={setEmbla}
        >
          {grouped.map((group, index) => (
            <Carousel.Slide key={index}>
              <Grid px={"50"}>
                {group.map((item, i) => (
                  <Grid.Col
                    key={i}
                    span={isMd ? 4 : isSm ? 6 : 12}
                  >
                    {renderItem(item, i)}
                  </Grid.Col>
                ))}
              </Grid>
            </Carousel.Slide>
          ))}
        </Carousel>

        <ActionIcon
          onClick={() => embla?.scrollNext()}
          visibleFrom="sm"
          bdrs={"100%"}
          opacity={canNext ? "100%" : "50%"}
          bg={theme.colors.blue[5]}
        >
          <ChevronRightIcon />
        </ActionIcon>
      </Flex>

      <Flex px={50} justify={{ base: "space-between", sm: "center" }}>
        <Group
          display={{ base: "flex", sm: "none" }}
          mt="md"
        >
          <ActionIcon onClick={() => embla?.scrollPrev()}>
            <ChevronLeftIcon />
          </ActionIcon>
          <ActionIcon onClick={() => embla?.scrollNext()}>
            <ChevronRightIcon />
          </ActionIcon>
        </Group>

        <Group justify="center" mt="md" gap={8}>
          {Array.from({ length: slidesCount }).map((_, index) => (
            <Box
              key={index}
              onClick={() => embla?.scrollTo(index)}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: theme.colors.blue[5],
                opacity: index === selected ? "100%" : "30%",
                cursor: "pointer"
              }}
            />
          ))}
        </Group>
      </Flex>
    </Box>
  );
}

export default CustomCarousel;