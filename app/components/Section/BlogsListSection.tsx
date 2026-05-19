import { Box, Button, Chip, Flex, Grid, Group, SegmentedControl, Stack, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { ListIcon, ThumbnailIcon } from "~/utils/icons";
import type { WritingItemsProps } from "~/utils/interface";
import BlogListCard from "../Template/Cards/BlogListCard";
import BlogThumbCard from "../Template/Cards/BlogThumbCard";

const BlogsListSection: React.FC<{blogList: WritingItemsProps[]}> = ({blogList}) => {

    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');

    const [displayType, setDisplayType] = useState<string>('list')
    const [categoryFilter, setCategoryFilter] = useState<string | 'all'>('all')
    const categories = Array.from(new Set(blogList.map(item => item.category)));
    return (
        <section>
            <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 40, md: 60}} px={{base: 20, md: 40, lg: 60}} py={{base: 40, md: 80}} pt={0}>
                <Flex direction={{base: 'column', sm: 'row'}} justify={'space-between'} align={{base: 'start', sm: 'center'}} gap={'sm'}>
                    <Chip.Group value={categoryFilter} onChange={setCategoryFilter}>
                        <Group gap={'sm'}>
                            <Button px={'lg'} onClick={() => setCategoryFilter('all')}
                                fw={'normal'}
                                bg={categoryFilter == 'all' ? (computedColorScheme == 'dark' ? theme.colors.blue[5] : theme.colors.blue[6]) : 'transparent'}
                                c={categoryFilter == 'all' ? theme.white : theme.colors.blue[6]} 
                                bd={`solid 1px ${categoryFilter == 'all' ? (computedColorScheme == 'dark' ? theme.colors.blue[6] : theme.colors.blue[5]) : (computedColorScheme == 'dark' ? theme.colors.blue[7] : theme.colors.blue[1])}`}>
                                    {'All'}
                            </Button>
                            {
                                categories.map((cat, index) =>
                                    <Button px={'lg'} onClick={() => setCategoryFilter(cat)}
                                        fw={'normal'}
                                        bg={categoryFilter == cat ? (computedColorScheme == 'dark' ? theme.colors.blue[5] : theme.colors.blue[6]) : 'transparent'}
                                        c={categoryFilter == cat ? theme.white : theme.colors.blue[6]} 
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
                            indicator: {
                                backgroundColor: computedColorScheme === 'dark' ? theme.colors.blue[5] : theme.colors.blue[4]
                            },
                        }}
                        value={displayType}
                        onChange={setDisplayType}
                        size="lg"
                        data={[
                            {label: (<Box w={20} h={20} c={displayType == 'list' ? theme.white : theme.colors.blue[5]}><ListIcon/></Box>), value: 'list'},
                            {label: (<Box w={20} h={20} c={displayType == 'thumbnail' ? theme.white : theme.colors.blue[5]}><ThumbnailIcon/></Box>), value: 'thumbnail'},
                        ]}
                    ></SegmentedControl>
                </Flex>
                <Grid>
                    {
                        blogList.map((blog, index) => 
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
                <Flex justify={'center'}>
                    <Button size="lg"
                        bg={computedColorScheme === 'dark' ? theme.colors.blue[5] :theme.colors.blue[6]}>{'See More'}</Button>
                </Flex>
            </Flex>
        </section>
    )
}

export default BlogsListSection