import { Carousel } from "@mantine/carousel";
import { ActionIcon, Flex, Title, useComputedColorScheme, useMantineTheme, type StyleProp } from "@mantine/core"
import type { EmblaCarouselType } from "embla-carousel";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "~/utils/icons";
import type { AboutMetricProps, MentorDetailsProps } from "~/utils/interface";
import PrimaryCard from "../Cards/PrimaryCard";

const CarouselHero: React.FC<{
    title: string,
    slideSize:  StyleProp<string | number> | undefined,
    items: AboutMetricProps[] 
}>  = ({title, slideSize, items}) => {
    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');

    
    
    const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(false);

    useEffect(() => {
        if (!embla) return;


        const update = () => {
            setCanPrev(embla.canScrollPrev());
            setCanNext(embla.canScrollNext());
        };

        embla.on("select", update);
        embla.on("reInit", update);

        update();

        return () => {
            embla.off("select", update);
            embla.off("reInit", update);
        };
    }, [embla]);
    return (
        <>
            <Flex justify={'space-between'} align={'center'}>
                <Title order={2}  c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>{title}</Title>
                <Flex gap={'xs'} display={canNext || canPrev ? 'flex' : 'none'}>
                    <ActionIcon
                        onClick={() => embla?.scrollPrev()}
                        bdrs={"100%"}
                        opacity={canPrev ? "100%" : "50%"}
                        bg={theme.colors.blue[5]}
                        size={'xl'}
                    >
                        <ChevronLeftIcon />
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
            </Flex>
            <Carousel
                slideSize={slideSize}
                slideGap={{base: 0, sm: 'sm'}}
                emblaOptions={{ align: 'start'}}
                withControls={false}
                withIndicators={false}
                getEmblaApi={setEmbla}>
                    {
                        items.map((guide, index) => {
                            return (
                                <Carousel.Slide key={index}>
                                    <PrimaryCard icon={guide.icon} iconBg={false}
                                        title={guide.title}
                                        description={guide.description}/>
                                </Carousel.Slide>
                            )
                        })
                    }
            </Carousel>
        </>
    )
}

export default CarouselHero