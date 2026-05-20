import type { HeadingsProps, WritingItemsProps } from "~/utils/interface"
import ImageOverlay from "../Template/ImageOverlay"
import { Box, Button, Card, Combobox, Flex, Group, Image, Paper, Select, Stack, Text, Typography, useCombobox, useComputedColorScheme, useMantineTheme } from "@mantine/core"
import CenterHero from "../Template/Content/CenterHero"
import { useEffect, useState } from "react"
import { loadBlogs } from "~/utils/blogs"
import { Link, Outlet } from "react-router"
import { BarsIcon } from "~/utils/icons"

const BlogPageSection: React.FC<any> = (blogObject) => {

    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');
    const blog = blogObject.frontmatter

    const MDXComponent = blogObject.default
    const [toc, setToC] = useState<HeadingsProps[]>([])

    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const headings = document.querySelectorAll(".mdx h1, .mdx h2, .mdx h3")
        const items: HeadingsProps[] = Array.from(headings).map((el) => ({
            text: el.textContent,
            id: el.id,
            level: Number(el.tagName[1]),
        }));
        setToC(items)

        const observer = new IntersectionObserver(
            (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
            },
            {
                rootMargin: "0px 0px -70% 0px", // triggers earlier
                threshold: 0.3,
            }
        );

        headings.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [])
    
    return (
        <>
            <ImageOverlay>
                <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 20, lg: 'xl'}} px={{base: 20, md: 40}} pt={{base: 40}} pb={{base: 20, md: 40}}>
                    <CenterHero title={blog.title} description={blog.description} subTitle={<Group visibleFrom="sm" gap="sm" c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>
                            <Text fz={'sm'}>{blog.category}</Text>
                            <Text fz={'sm'}>•</Text>
                            <Text fz={'sm'} c={computedColorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[6]}>{blog.date}</Text>
                        </Group>} cta={<></>}
                    />
                </Flex>
            </ImageOverlay>
            <Image src={blog.image} alt={blog.image} w={'100%'} h={{base: 150, sm: 355, md: 500}}/>
            <Flex pos={'relative'} p={{base: 40, md: 80}} py={{base: 20, sm: 40, md: 80}} gap={40} direction={{base: 'column', lg: 'row'}} align={{base: 'stretch', lg: 'start'}}>
                <Card display={'flex'} p={28} className="flex-col gap-5" visibleFrom="lg" flex={0.40} bg={computedColorScheme === 'dark' ? theme.colors.blue[8] : 'white'} bdrs={'md'} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`}
                    style={{boxShadow: `0px 2px 10px 6px ${computedColorScheme === 'dark' ? 'rgba(3, 84, 166, 0.08)' : 'rgba(1, 17, 33, 0.04)'}`}}>
                    <Flex align="center" gap={20}>
                        <Box w={25} h={25}>
                            <BarsIcon/>
                        </Box>
                        <Text fz={'lg'}>{'On this page'}</Text>
                    </Flex>
                    {toc.map((toc, index) => 
                        <Link key={index} to={`#${toc.id}`} style={{
                            paddingLeft: toc.level == 3 ? "1rem" : 'none'
                        }}>{toc.text}</Link>
                    )}
                </Card>
                <Select
                    display={{base: 'block', lg: 'none'}}
                    value={activeId}
                    onChange={(value) => {
                        if (!value) return;
                            document.getElementById(value)?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    }}
                    data={toc.map((h) => ({
                        value: h.id,
                        label: `${h.text}`,
                    }))}
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
                <Box flex={1} >
                    <Paper className="mdx" bg={'transparent'}>
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