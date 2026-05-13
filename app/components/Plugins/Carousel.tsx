import { ActionIcon, Box, Button, Flex, Group, Image, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { chunkArray } from "~/utils/helper";

import { Carousel } from '@mantine/carousel';
import { Grid, Card } from '@mantine/core';
import { testimonials } from "~/utils/constant";
import type { TestimonialProps } from "~/utils/interface";
import { ChevronLeftIcon, ChevronRightIcon } from "~/utils/icons";
import { useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";

const ItemCard: React.FC<{item: TestimonialProps}> = ({item}) => {

  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (    
    <Card p={'md'} bg={computedColorScheme === 'dark' ? theme.colors.blue[8] : 'white'} bdrs={'md'} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`} h={'100%'} display={'flex'} className="flex-col gap-6 justify-start" c="inherit" shadow="sm">
      <Flex gap="md">
        <Image src={item.avatar} w={50} h={50} bdrs={'100%'}/>
        <Box>
          <Text fz="xl" c={computedColorScheme === 'dark' ? 'white' : 'black'}>{item.name}</Text>
          <Text fz="sm">{item.position}</Text>
        </Box>
      </Flex>
      <Text className="line-clamp-5">“{item.testimony}</Text>
      <Button display={'flex'} variant="transparent" p={0} fw={'normal'} mt={'auto'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>
        {'Show more +'}
      </Button>
    </Card>
  )
}
const CustomCarousel: React.FC<{
}> = ({}) => {
  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const isMd = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
  const isSm = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);


  const items: TestimonialProps[] = testimonials;

  let itemsPerSlide = 1;

  if (isMd) {
    itemsPerSlide = 6;
  } else if (isSm) {
    itemsPerSlide = 4;
  }

  const grouped = chunkArray(items, itemsPerSlide);

  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  const [selected, setSelected] = useState(0);

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false)
  

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => {
      setSelected(embla.selectedScrollSnap());
    };
    const update = () => {
      setCanPrev(embla.canScrollPrev());
      setCanNext(embla.canScrollNext());
    };
  
    embla.on('select', onSelect);
    onSelect();

    update();
    embla.on('select', update);
    embla.on('reInit', update); 

    return () => {
      embla.off('select', onSelect);

      embla.off('select', update);
      embla.off('reInit', update);
    };
  }, [embla]);

  const slidesCount = embla?.scrollSnapList().length || 0;

  return (
    <>
    <Box>
      <Flex align={'center'}>
        <ActionIcon onClick={() => embla?.scrollPrev()} 
          visibleFrom="sm" bdrs={'100%'}
          opacity={canPrev ? '100%' : '50%'}
          bg={theme.colors.blue[5]}
          >
          <ChevronLeftIcon />
        </ActionIcon>
        <Carousel slideSize="100%" w={'100%'}
          key={itemsPerSlide}
          withIndicators={false}
          withControls={false}
          getEmblaApi={setEmbla}>
          {grouped.map((group, index) => (
            <Carousel.Slide key={index}>
              <Grid px={'50'}>
                {group.map((item: TestimonialProps, i) => (
                  <Grid.Col
                    key={i}
                    span={
                      isMd
                        ? 4
                        : isSm
                        ? 6
                        : 12
                    }

                  >
                    <ItemCard item={item}/>
                  </Grid.Col>
                ))}
              </Grid>
            </Carousel.Slide>
          ))}
        </Carousel>
        <ActionIcon onClick={() => embla?.scrollNext()} 
          visibleFrom="sm" bdrs={'100%'}
          opacity={canNext ? '100%' : '50%'}
          bg={theme.colors.blue[5]}>
          <ChevronRightIcon />
        </ActionIcon>
      </Flex>
      <Flex px={50} justify={{base: "space-between", sm: 'center'}}>
        <Group justify="center" mt="md" className="mobile-controls" display={{base: 'flex', sm: 'none'}}>
          <ActionIcon onClick={() => embla?.scrollPrev()} bdrs={'100%'}
            opacity={canPrev ? '100%' : '50%'}
            bg={theme.colors.blue[5]}
            >
            <ChevronLeftIcon />
          </ActionIcon>
          <ActionIcon onClick={() => embla?.scrollNext()} bdrs={'100%'}
            opacity={canNext ? '100%' : '50%'}
            bg={theme.colors.blue[5]}>
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
                borderRadius: '50%',
                backgroundColor: theme.colors.blue[5],
                opacity: index == selected ? '100%' : '30%',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            />
          ))}
        </Group>
      </Flex>
    </Box>

    </>

  )
}

export default CustomCarousel