import { Box, Button, Chip, Flex, Grid, Group, SegmentedControl, Stack, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { useEffect, useState } from "react";
import { ListIcon, ThumbnailIcon } from "~/utils/icons";
import type { WritingItemsProps } from "~/utils/interface";
import BlogListCard from "../Template/Cards/BlogListCard";
import BlogThumbCard from "../Template/Cards/BlogThumbCard";
import { mapBlogsToListItems } from "~/utils/blogs";

const BlogsListSection: React.FC<{blogs: any, searchQuery: string}> = ({blogs, searchQuery}) => {

    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');

    const [displayType, setDisplayType] = useState<string>('list')
    const [categoryFilter, setCategoryFilter] = useState<string | 'all'>('all')

    const blogList = mapBlogsToListItems(blogs);
    const categories = Array.from(new Set(blogList.map(item => item.category)));

    const [visibleCount, setVisibleCount] = useState<number>(6);
    const filteredBlogs = blogList.filter((blog) => {
        const matchesCategory =
            categoryFilter === "all" || blog.category === categoryFilter;

        const matchesSearch =
            blog.title.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    const visibleBlogs = filteredBlogs.slice(0, visibleCount);

    useEffect(() => {
        setVisibleCount(6); 
    }, [categoryFilter, searchQuery]);

    return (
        <section>
            <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 40, md: 60}} px={{base: 20, md: 40, lg: 60}} py={{base: 40, md: 80}} pt={0}>
                <Flex direction={{base: 'column', sm: 'row'}} justify={'space-between'} align={{base: 'start', sm: 'center'}} gap={'sm'}>
                    <Chip.Group value={categoryFilter} onChange={setCategoryFilter}>
                        <Group gap={'sm'}>
                            <Button px={'lg'} onClick={() => setCategoryFilter('all')}
                                fw={'normal'}
                                bg={categoryFilter == 'all' ? (computedColorScheme == 'dark' ? theme.colors.blue[5] : theme.colors.blue[6]) : 'transparent'}
                                c={categoryFilter == 'all' ? theme.white : (computedColorScheme == 'dark' ? theme.colors.blue[4] : theme.colors.blue[5])} 
                                bd={`solid 1px ${categoryFilter == 'all' ? (computedColorScheme == 'dark' ? theme.colors.blue[6] : theme.colors.blue[5]) : (computedColorScheme == 'dark' ? theme.colors.blue[7] : theme.colors.blue[1])}`}>
                                    {'All'}
                            </Button>
                            {
                                categories.map((cat, index) =>
                                    <Button key={index} px={'lg'} onClick={() => setCategoryFilter(cat)}
                                        fw={'normal'}
                                        bg={categoryFilter == cat ? (computedColorScheme == 'dark' ? theme.colors.blue[5] : theme.colors.blue[6]) : 'transparent'}
                                        c={categoryFilter == cat ? theme.white : (computedColorScheme == 'dark' ? theme.colors.blue[4] : theme.colors.blue[5])} 
                                        bd={`solid 1px ${categoryFilter == cat ? (computedColorScheme == 'dark' ? theme.colors.blue[6] : theme.colors.blue[5]) : (computedColorScheme == 'dark' ? theme.colors.blue[7] : theme.colors.blue[1])}`}
                                    >
                                        {cat}
                                    </Button>)
                            }
                        </Group>
                    </Chip.Group>
                    <SegmentedControl
                        styles={{
                            root: {
                                backgroundColor: computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[0]
                            },
                            control: {
                                width: '36px',
                                height: '36px'
                            },
                            label: {
                                padding: '0px',
                                display: 'flex',
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center'
                            },
                            indicator: {
                                backgroundColor: computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]
                            },
                        }}
                        value={displayType}
                        onChange={setDisplayType}
                        size="lg"
                        data={[
                            {label: (<Box w={20} h={20} c={displayType == 'thumbnail' ? theme.white : theme.colors.blue[5]}><ThumbnailIcon/></Box>), value: 'thumbnail'},
                            {label: (<Box w={20} h={20} c={displayType == 'list' ? theme.white : theme.colors.blue[5]}><ListIcon/></Box>), value: 'list'},
                        ]}
                    ></SegmentedControl>
                </Flex>
                <Grid>
                    {
                        visibleBlogs.map((blog, index) => 
                            <Grid.Col span={
                                displayType == 'list' ? 12 : 
                                {base: 6, lg: 4}
                            } key={index}>
                                {
                                    displayType == 'list' ? <BlogListCard {...blog}/> : <BlogThumbCard {...blog}/>
                                }
                            </Grid.Col>
                        )
                    }
                </Grid>
                {visibleCount < filteredBlogs.length && (
                    <Flex justify={'center'}>
                        <Button
                        size="lg"
                        bg={computedColorScheme === 'dark'
                            ? theme.colors.blue[5]
                            : theme.colors.blue[6]}
                        onClick={() => setVisibleCount(prev => prev + 6)}
                        >
                        {'See More'}
                        </Button>
                    </Flex>
                )}
            </Flex>
        </section>
    )
}

export default BlogsListSection