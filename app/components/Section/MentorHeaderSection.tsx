import type { MentorHeaderProps } from "~/utils/interface";
import ImageOverlay from "../Template/ImageOverlay";
import { ActionIcon, Flex, Text, Title, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { MentorCTA } from "../Action/CTAButtons";
import { Carousel } from "@mantine/carousel";
import PrimaryCard from "../Template/Cards/PrimaryCard";
import { useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "~/utils/icons";

const MentorHeaderSection: React.FC<MentorHeaderProps> = ({
    title, subTitle, description, mentorGuides
}) => {
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
        <ImageOverlay>
            <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 20, lg: 'xl'}} px={{base: 20, md: 40}} pt={{base: 40}} pb={{base: 20, md: 40}}>
                <Flex direction={'column'} align={'center'} gap={'xl'} maw={1080} mx={'auto'}>
                    <Title order={2} fw={'normal'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>{subTitle}</Title>
                    <Title order={1} id="hero-title" className="text-5xl! lg:text-6xl! text-center" style={{
                            background: `-webkit-linear-gradient(0deg, #064280 0%, #4B96E7 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        } as React.CSSProperties}
                    >{title}</Title>
                    <Text>{description}</Text>
                    <MentorCTA size="lg"/>
                </Flex>
                <Flex justify={'space-between'} align={'center'}>
                    <Title order={2}  c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>{mentorGuides.title}</Title>
                    <Flex gap={'xs'}>
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
                    slideSize={{ base: '100%', sm: '50%', md: '33.33333%'}}
                    slideGap={{base: 0, sm: 'sm'}}
                    emblaOptions={{ align: 'start'}}
                    withControls={false}
                    withIndicators={false}
                    getEmblaApi={setEmbla}>
                        {
                            mentorGuides.guides.map((guide, index) => {
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
            </Flex>
        </ImageOverlay>
    )
}

export default MentorHeaderSection