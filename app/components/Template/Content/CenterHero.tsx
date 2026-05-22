import { Flex, Text, Title, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { HeroTitle } from "../HeroTitle";

const CenterHero: React.FC<{
    title: string,
    subTitle?: string | React.ReactNode,
    description: string,
    cta: React.ReactNode
}> = ({ title, subTitle, description, cta }) => {
    
    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');

    return (
        <Flex direction={'column'} align={'center'} gap={'xl'} maw={1080} mx={'auto'}>
            {subTitle && 
                (typeof subTitle == 'string' ? 
                    <Title order={2} fw={'normal'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>{subTitle}</Title>
                : subTitle)
            }
            <HeroTitle ta={'center'} title={title}/>
            <Text ta={'center'}>{description}</Text>
            {cta}
        </Flex>
    )
}

export default CenterHero