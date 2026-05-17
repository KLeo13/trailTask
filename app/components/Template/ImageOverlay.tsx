import { Box, useComputedColorScheme, useMantineTheme, type StyleProp } from "@mantine/core";

const ImageOverlay: React.FC<{
    children: any
}> = ({ children }) => {
  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light');

return (
    <section className="relative z-10" style={{
        backgroundColor: computedColorScheme === 'dark' ? theme.colors.blue[8] : theme.white
    }}>
        {children}
    </section>
)
}

export default ImageOverlay