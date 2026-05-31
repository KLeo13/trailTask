import type { HeadingsProps, WritingItemsProps } from "~/utils/interface"
import ImageOverlay from "../Template/ImageOverlay"
import { Box, Button, Card, Combobox, Flex, Group, Image, List, Paper, Select, Stack, Text, Typography, UnstyledButton, useCombobox, useComputedColorScheme, useMantineTheme } from "@mantine/core"
import CenterHero from "../Template/Content/CenterHero"
import { useEffect, useState } from "react"
import { loadBlogs } from "~/utils/blogs"
import { Link, Outlet } from "react-router"
import { BarsIcon } from "~/utils/icons"
import { useScrollSpy } from "@mantine/hooks"

const BlogPageSection: React.FC<any> = (blogObject) => {

    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');
    const blog = blogObject.frontmatter

    const MDXComponent = blogObject.default

    const spy = useScrollSpy({
        selector: '#mdx h2, #mdx h3',
        getDepth: (element) => Number(element.getAttribute('data-level')),
        getValue: (element) => element.getAttribute('data-heading') || '',
    });
    return (
        <>
            <ImageOverlay>
                <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 20, lg: 'xl'}} px={{base: 20, md: 40}} pt={{base: 40}} pb={{base: 20, md: 40}}>
                    <CenterHero title={blog.title} description={blog.excerpt ?? blog.description} subTitle={<Group visibleFrom="sm" gap="sm" c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>
                            <Text fz={'sm'}>{blog.category}</Text>
                            <Text fz={'sm'}>•</Text>
                            <Text fz={'sm'} c={computedColorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[6]}>{blog.date}</Text>
                        </Group>} cta={<></>}
                    />
                </Flex>
            </ImageOverlay>
            <Image src={blog.image} alt={blog.image} w={'100%'} h={{base: 150, sm: 355, md: 500}}/>
            <Flex pos={'relative'} p={{base: 40, md: 80}} py={{base: 20, sm: 40, md: 80}} gap={40} direction={{base: 'column', lg: 'row'}}>
                <Card display={'flex'} 
                    p={28} 
                    className="flex-col gap-5" 
                    visibleFrom="lg" flex={0.30} 
                    bg={computedColorScheme === 'dark' ? theme.colors.blue[8] : 'white'} 
                    bdrs={'md'} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`}
                    style={{
                        boxShadow: `0px 2px 10px 6px ${computedColorScheme === 'dark' ? 'rgba(3, 84, 166, 0.08)' : 'rgba(1, 17, 33, 0.04)'}`,
                        height: 'fit-content'
                    }}
                    pos={'sticky'}
                    top={'6rem'}>
                    <Flex align="center" gap={20}>
                        <Box w={25} h={25}>
                            <BarsIcon/>
                        </Box>
                        <Text fz={'lg'} fw={'bold'}>{'On this page'}</Text>
                    </Flex>
                    <List pl={0} >
                        {spy.data.map((heading, index) => {
                            return (
                                <List.Item
                                    key={index}
                                    py={5}
                                    style={{
                                        listStylePosition: 'inside',
                                        paddingInlineStart: heading.depth * (2 * heading.depth),
                                    }}
                                >
                                    <UnstyledButton onClick={() => heading.getNode().scrollIntoView()}>
                                        <Text c={index === spy.active ? (computedColorScheme == 'dark' ? theme.colors.blue[4] : theme.colors.blue[6]) : 'inherit'}>{heading.value}</Text>
                                    </UnstyledButton>
                                </List.Item>
                            )
                        })}
                    </List>
                </Card>
                <Box display={{base: 'block', lg: 'none'}}
                    pos={'sticky'}
                    top={'6rem'}
                    bg={computedColorScheme === 'dark' ? theme.colors.blue[8] : 'white'} 
                    bdrs={'md'} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`}
                    style={{
                        boxShadow: `0px 2px 10px 6px ${computedColorScheme === 'dark' ? 'rgba(3, 84, 166, 0.08)' : 'rgba(1, 17, 33, 0.04)'}`,
                    }}
                    w={'100%'}>
                    <Select
                        value={String(spy.active)}
                        onChange={(value) => {
                            if (!value) return;

                            const index = Number(value);
                            const heading = spy.data[index];

                            heading?.getNode()?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                        }}
                        data={spy.data.map((heading, index) => ({
                            value: String(index),
                            label: heading.value,
                        }))}
                        size="md"
                        styles={{
                            input: {
                                border: `solid 1px ${computedColorScheme == 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`,
                                backgroundColor: 'transparent'
                            },
                            dropdown: {
                                border: `solid 1px ${computedColorScheme == 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`,
                                backgroundColor: computedColorScheme === 'dark' ? theme.colors.blue[8] : 'white'
                            },
                        }}
                    />
                </Box>
                <Box flex={1} >
                    <Paper id="mdx" bg={'transparent'}>
                        <Typography>
                            <MDXComponent/>
                        </Typography>
                    </Paper>
                </Box>
            </Flex>
        </>
    )
}
export default BlogPageSection