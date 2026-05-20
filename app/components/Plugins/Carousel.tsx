import { Carousel } from "@mantine/carousel";
import { ActionIcon, Box, Flex, Grid, Group, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import type { EmblaCarouselType } from "embla-carousel";
import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "~/utils/icons";

type Layout = {
  cols: number;
  rows: number;
};

type ResponsiveLayout = {
  base: Layout;
  sm?: Layout;
  md?: Layout;
  lg?: Layout;
};

type CustomCarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  layout: ResponsiveLayout;
};

function chunkArray<T>(array: T[], size: number) {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export function CustomCarousel<T>({
  items,
  renderItem,
  layout,
}: CustomCarouselProps<T>) {
  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light');

  // Mantine default breakpoints
  const isLg = useMediaQuery("(min-width: 1200px)");
  const isMd = useMediaQuery("(min-width: 992px)");
  const isSm = useMediaQuery("(min-width: 768px)");

  // Resolve active layout
  let currentLayout = layout.base;

  if (isLg && layout.lg) currentLayout = layout.lg;
  else if (isMd && layout.md) currentLayout = layout.md;
  else if (isSm && layout.sm) currentLayout = layout.sm;

  const itemsPerSlide = currentLayout.cols * currentLayout.rows;
  const slides = chunkArray(items, itemsPerSlide);

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

    embla.reInit()

    return () => {
      embla.off("select", onSelect);
      embla.off("select", update);
      embla.off("reInit", update);
    };
  }, [embla, itemsPerSlide, items.length]);

  const slidesCount = embla?.scrollSnapList().length || 0;

  return (
    <Box  w={'100%'}>
      <Flex w={'100%'} align={'center'} gap={'sm'}>
        <ActionIcon
            visibleFrom="sm"
            onClick={() => embla?.scrollPrev()}
            bdrs={"100%"}
            opacity={canPrev ? "100%" : "50%"}
            bg={theme.colors.blue[5]}
            size={'lg'}
        >
            <ChevronLeftIcon/>
        </ActionIcon>
        <Carousel w={'100%'} slideSize="100%" 
            slideGap="md"
            withControls={false}
            withIndicators={false}
            key={itemsPerSlide}
            getEmblaApi={setEmbla}
          >
          {slides.map((group, slideIndex) => (
            <Carousel.Slide key={slideIndex}>
              <Grid>
                {group.map((item, itemIndex) => (
                  <Grid.Col
                    key={itemIndex}
                    span={12 / currentLayout.cols}
                  >
                    {renderItem(item, itemIndex)}
                  </Grid.Col>
                ))}
              </Grid>
            </Carousel.Slide>
          ))}
        </Carousel>
        <ActionIcon
            visibleFrom="sm"
            onClick={() => embla?.scrollNext()}
            bdrs={"100%"}
            opacity={canNext ? "100%" : "50%"}
            bg={theme.colors.blue[5]}
            size={'lg'}
        >
            <ChevronRightIcon />
        </ActionIcon>
      </Flex>
      <Flex justify={{base: 'space-between', sm: 'center'}} align={'center'} mt={'sm'}>
        <Flex gap={'xs'} display={canNext || canPrev ? {base: 'flex', sm: 'none'} : 'none'}>
          <ActionIcon
              onClick={() => embla?.scrollPrev()}
              bdrs={"100%"}
              opacity={canPrev ? "100%" : "50%"}
              bg={theme.colors.blue[5]}
              size={'xl'}
          >
              <ChevronLeftIcon/>
          </ActionIcon>
          <ActionIcon
              onClick={() => embla?.scrollNext()}
              bdrs={"100%"}
              opacity={canNext ? "100%" : "50%"}
              bg={theme.colors.blue[5]}
              size={'xl'}
          >
              <ChevronRightIcon />
          </ActionIcon>
        </Flex>
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