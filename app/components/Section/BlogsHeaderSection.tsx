import type { MentorHeaderProps, WritingHeaderProps, WritingItemsProps } from "~/utils/interface";
import ImageOverlay from "../Template/ImageOverlay";
import { ActionIcon, Box, Button, Flex, Input, Text, Title, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { MentorCTA } from "../Action/CTAButtons";
import { Carousel } from "@mantine/carousel";
import PrimaryCard from "../Template/Cards/PrimaryCard";
import { useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "~/utils/icons";
import CenterHero from "../Template/Content/CenterHero";
import CarouselHero from "../Template/Content/CarouselHero";

const BlogsHeaderSection: React.FC<WritingHeaderProps> = ({
    title, description
}) => {
    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');

    return (
        <ImageOverlay>
            <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 20, lg: 'xl'}} px={{base: 20, md: 40}} pt={{base: 40}} pb={{base: 20, md: 40}}>
                <CenterHero title={title} description={description} cta={
                    <Flex gap={'md'} w={'100%'}>
                        <Input name="search" placeholder="Search" size={'md'} w={'100%'} maw={490} styles={{
                                input: {
                                    border: `solid 1px ${computedColorScheme == 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`,
                                    backgroundColor: 'transparent'
                                },
                            }}
                            leftSection={<Box w={16} h={16}
                                ><SearchIcon/></Box>
                            }/>
                        <Button size="md" miw={100} 
                            bg={computedColorScheme == 'dark' ? theme.colors.blue[5] : theme.colors.blue[6]}
                        >{'Search'}</Button>
                    </Flex>
                }/>
            </Flex>
        </ImageOverlay>
    )
}

export default BlogsHeaderSection