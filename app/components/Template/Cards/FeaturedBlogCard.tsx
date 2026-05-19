import { Card, Flex, Group, Image, Stack, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import type { WritingItemsProps } from "~/utils/interface";

const FeaturedBlogCard: React.FC<WritingItemsProps> = (props) => {

    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');

    return (
        <Card p={40} bg={computedColorScheme === 'dark' ? theme.colors.blue[8] : 'white'} bdrs={'md'} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`}
            style={{boxShadow: `0px 2px 10px 6px ${computedColorScheme === 'dark' ? 'rgba(3, 84, 166, 0.08)' : 'rgba(1, 17, 33, 0.04)'}`}}>
            <Flex gap={40} align={'center'} direction={{base: 'column', sm: 'row'}}>
                <Image src={props.image} w={{base: '100%', sm: 335, lg: 500}} h={{base: 227, lg: 340}} alt={props.image} bdrs={'md'}/>
                <Stack>
                    <Group gap="sm" c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>
                        <Text fz={'sm'}>{props.category}</Text>
                        <Text fz={'sm'}>•</Text>
                        <Text fz={'sm'} c={computedColorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[6]}>{props.date}</Text>
                    </Group>
                    <Text fz={{base: 30, lg: 48}} lh={1.2} fw={"bold"} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>{props.title}</Text>
                    <Text className="line-clamp-3" display={{base: 'none', md: 'flow-root'}} c={computedColorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[6]}>{props.description}</Text>
                </Stack>
            </Flex>
        </Card>
    )
}

export default FeaturedBlogCard