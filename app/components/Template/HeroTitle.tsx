import { useComputedColorScheme, useMantineTheme, type StyleProp } from "@mantine/core";
import { Title } from '@mantine/core';

export function HeroTitle({ title, ta = 'start' }: { title: string, ta?: StyleProp<React.CSSProperties['textAlign']>}) {
    
    const theme = useMantineTheme()
    const computedColorScheme = useComputedColorScheme('light');

    return (
        <Title key={`title-${computedColorScheme}`} 
            order={1} 
            id="hero-title" 
            className="text-5xl! lg:text-6xl!" 
            py={'xs'}
            ta={ta}
            style={{
                background: `-webkit-linear-gradient(0deg, ${computedColorScheme == 'dark' ? theme.colors.blue[4] : theme.colors.blue[6]} 0%, ${computedColorScheme === 'dark' ? theme.colors.blue[6] : theme.colors.blue[4]} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text', // add the non-prefixed version too
                color: 'transparent',   // fallback
            } as React.CSSProperties}
        >{title}</Title>
    );
}
