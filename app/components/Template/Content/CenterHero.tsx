import { Flex, Text, Title, useComputedColorScheme, useMantineTheme } from "@mantine/core";

const CenterHero: React.FC<{
    title: string,
    subTitle?: string,
    description: string,
    cta: React.ReactNode
}> = ({ title, subTitle, description, cta }) => {
    
    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');

    return (
        <Flex direction={'column'} align={'center'} gap={'xl'} maw={1080} mx={'auto'}>
            {subTitle && <Title order={2} fw={'normal'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>{subTitle}</Title>}
            <Title order={1} id="hero-title" className="text-5xl! lg:text-6xl! text-center" style={{
                    background: `-webkit-linear-gradient(0deg, #064280 0%, #4B96E7 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                } as React.CSSProperties}
            >{title}</Title>
            <Text ta={'center'}>{description}</Text>
            {cta}
        </Flex>
    )
}

export default CenterHero