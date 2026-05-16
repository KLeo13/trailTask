import { Box, useComputedColorScheme, useMantineTheme, type StyleProp } from "@mantine/core";

const HalfBox: React.FC<{
    mih?: StyleProp<React.CSSProperties['minHeight']>
    children: any
}> = ({mih={base: 1027, md: 591, lg: 770}, children}) => {
  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

return (
    <section className="relative z-10" style={{
        backgroundColor: computedColorScheme === 'dark' ? theme.colors.blue[8] : theme.white
    }}>
        <Box pos={'absolute'} top={0} left={0} w={'100%'} mih={mih} bg={theme.colors.blue[6]} className="-z-10"/>
            {children}
    </section>
)
}

export default HalfBox