import { Card, Flex, Group, Image, Stack, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import type { WritingItemsProps } from "~/utils/interface";

const BlogThumbCard: React.FC<WritingItemsProps> = (props) => {

    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');

    return (
        <>
            <Card p={{base: 'sm', sm: 24}} bg={computedColorScheme === 'dark' ? theme.colors.blue[8] : 'white'} bdrs={'md'} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`}
                style={{boxShadow: `0px 2px 10px 6px ${computedColorScheme === 'dark' ? 'rgba(3, 84, 166, 0.08)' : 'rgba(1, 17, 33, 0.04)'}`}}>
                <Flex direction={'column'} gap={{base: 'sm', sm: 20}} align={'center'}>
                    <Image src={props.image} w={'100%'} h={{base: 88, xs: 150, sm: 221, md:192}} alt={props.image} bdrs={'md'}/>
                    <Stack>
                        <Group visibleFrom="sm" gap="sm" c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>
                            <Text fz={'sm'}>{props.category}</Text>
                            <Text fz={'sm'}>•</Text>
                            <Text fz={'sm'} c={computedColorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[6]}>{props.date}</Text>
                        </Group>
                        <Text fz={{base: 'md', sm: 24}} fw={"bold"} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]} lineClamp={2}>{props.title}</Text>
                        <Text fz={{base: 'sm', sm: 'md'}} className="line-clamp-3" c={computedColorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[6]} lineClamp={3}>{props.description}</Text>
                    </Stack>
                </Flex>
            </Card>
        </>
    )
}

export default BlogThumbCard