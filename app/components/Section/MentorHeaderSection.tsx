import type { MentorHeaderProps } from "~/utils/interface";
import ImageOverlay from "../Template/ImageOverlay";
import { ActionIcon, Flex, Text, Title, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { MentorCTA } from "../Action/CTAButtons";
import { Carousel } from "@mantine/carousel";
import PrimaryCard from "../Template/Cards/PrimaryCard";
import { useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "~/utils/icons";
import CenterHero from "../Template/Content/CenterHero";
import CarouselHero from "../Template/Content/CarouselHero";

const MentorHeaderSection: React.FC<MentorHeaderProps> = ({
    title, subTitle, description, mentorGuides
}) => {
    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');

    return (
        <ImageOverlay>
            <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 20, lg: 'xl'}} px={{base: 20, md: 40}} pt={{base: 40}} pb={{base: 20, md: 40}}>
                <CenterHero title={title} subTitle={subTitle} description={description} cta={<MentorCTA size="lg"/>}/>
                <CarouselHero title={mentorGuides.title} slideSize={{ base: '100%', sm: '50%', md: '33.33333%'}} items={mentorGuides.guides}/>
            </Flex>
        </ImageOverlay>
    )
}

export default MentorHeaderSection