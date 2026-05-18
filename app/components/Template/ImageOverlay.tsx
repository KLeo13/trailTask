import { Box, Flex, Image, useComputedColorScheme, useMantineTheme, type StyleProp } from "@mantine/core";

const ImageOverlay: React.FC<{
    children: any
}> = ({ children }) => {
  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light');

return (
    <section className="relative z-10 overflow-x-hidden" style={{
        backgroundColor: computedColorScheme === 'dark' ? theme.colors.blue[8] : theme.white
    }}>
        <Flex justify={'center'} pos={'absolute'} left={'50%'} className="-translate-x-1/2" maw={1440}>
            <Image w={{base: '150vw', sm: '120vw'}} h={'auto'} src={'/images/wave.png'} maw={'150vw'}/>
        </Flex>
        {children}
    </section>
)
}

export default ImageOverlay