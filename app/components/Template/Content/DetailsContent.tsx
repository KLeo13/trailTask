import { Box, Flex, Image, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core";

const DetailsContent: React.FC<{
    image: string,
    title: string,
    subtitle?: string,
    description: string,
    extraHeaderContent?: React.ReactNode,
    extraContent?: React.ReactNode
}> = ({
    image,
    title,
    subtitle,
    description,
    extraHeaderContent,
    extraContent,
}) => {
    
    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');
    return (
        <>
            <Flex direction={'row'} align={'center'} gap={60}>
                <Box w={456} h={456} p={'sm'} bg={'#FFFFFF1A'} bdrs={24} visibleFrom="md">
                    <Image src={image} alt="mentor-image" w={428} h={428} bdrs={20}/>
                </Box>
                <Flex flex={`1`} c="white" direction={'column'} gap={{base: 40, lg: 60}}>
                    <Flex direction={'column'} gap={20}>
                        <h2 id="title" className="text-4xl font-bold">{title}</h2>
                        {subtitle && <Text fw={'bold'} id="description">{subtitle}</Text>}
                        <Text id="description">{description}</Text>
                    </Flex>
                    {extraHeaderContent && extraHeaderContent}
                </Flex>
            </Flex>
            {extraContent && extraContent}
        </>
    )
}

export default DetailsContent