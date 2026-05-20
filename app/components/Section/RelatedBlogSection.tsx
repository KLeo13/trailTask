import type { WritingItemsProps } from "~/utils/interface"
import HalfBox from "../Template/HalfBox"
import { ActionIcon, Box, Card, Flex, Group, Image, Stack, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core"
import { WritingCard } from "./WritingSection"
import { Carousel } from "@mantine/carousel"
import { useEffect, useState } from "react"
import type { EmblaCarouselType } from "embla-carousel"
import { ChevronLeftIcon, ChevronRightIcon } from "~/utils/icons"
import { Link } from "react-router"
import { CustomCarousel } from "../Plugins/Carousel"

const RelatedBlogSection: React.FC<any> = (blogs) => {
    
    const blogList: WritingItemsProps[] = Object.values(blogs).map((blog: any) => blog.frontmatter)

    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');

    return (
        <HalfBox mih={{base: 384, md: 400}}>
            <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 40, md: 60, lg: 80}} px={{base: 20, md: 40, lg: 60}} py={{base: 40, md: 80}}>
                <Flex direction={'column'} gap="md">
                    <h2 id="testimonial-title" className="text-4xl font-bold text-center text-white" >{'Related Posts'}</h2>
                    <Text id="testimonial-description" fz={'md'} ta="center" c="white">
                        {'Continue reading with more thoughts and lessons from real-world engineering.'}
                    </Text>
                </Flex>
                <CustomCarousel
                    items={blogList}
                    renderItem={(blog: any) => <Card h={'100%'} p={24} bg={computedColorScheme === 'dark' ? theme.colors.blue[8] : 'white'} bdrs={'md'} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`}
                        style={{boxShadow: `0px 2px 10px 6px ${computedColorScheme === 'dark' ? 'rgba(3, 84, 166, 0.08)' : 'rgba(1, 17, 33, 0.04)'}`}}>
                        <Flex direction={'column'} gap={24}>
                            <Image src={blog.image} w={'100%'} h={{base: 187, sm: 181, md: 166}} bdrs={'md'}/>
                            <Flex gap="sm" c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>
                                <Text fz={'sm'}>{blog.category}</Text>
                                <Text fz={'sm'}>•</Text>
                                <Text fz={'sm'} c={computedColorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[6]}>{blog.date}</Text>
                            </Flex>
                            <Stack gap={'sm'}>
                                <Link to={`/blogs/${blog.slug}`}><Text fz={{base: 'md', sm: 24}} fw={"bold"} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]} lineClamp={2}>{blog.title}</Text></Link>
                                <Text fz={{base: 'sm', sm: 'md'}} c={computedColorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[6]} lineClamp={4}>{blog.description}</Text>
                            </Stack>
                        </Flex>
                    </Card>}
                    layout={{
                        base: { cols: 1, rows: 1 },
                        sm: { cols: 2, rows: 1 },
                        md: { cols: 3, rows: 1 },
                    }}>
                    
                </CustomCarousel>
            </Flex>
        </HalfBox>
    )
}

export default RelatedBlogSection
