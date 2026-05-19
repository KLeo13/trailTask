import { Button, useComputedColorScheme, useMantineTheme } from "@mantine/core"
import { ArrowRightIcon, DownloadIcon } from "~/utils/icons"

export const MainCTA: React.FC<{
  size?: 'sm' | 'md' | 'lg'
}> = ({size = 'md'}) => {

  const pSize = size == 'sm' ? 8 : size == 'md' ? 12 : 16
  const textSize = size == 'sm' ? 'xs' : size == 'md' ? 'sm' : 'md'
  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light');

  return (
    <Button
      p={{base: 8, md: pSize}}
      px={{ base: 24 }}
      fz={{base: 'sm', md: textSize}}
      size={size}
      bg={computedColorScheme === 'dark' ? theme.colors.blue[5] :theme.colors.blue[6]}
      rightSection={<ArrowRightIcon/>}
      onClick={() => window.location.href = '/work-with-me'}
    >
      {'Work with me '}
    </Button>
  )
}
export const DownloadCTA: React.FC<{
  size?: 'sm' | 'md' | 'lg'
}> = ({size = 'md'}) => {

  const pSize = size == 'sm' ? 8 : size == 'md' ? 12 : 16
  const textSize = size == 'sm' ? 'xs' : size == 'md' ? 'sm' : 'md'
  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light');

  return (
    <Button
      p={{base: 8, md: pSize}}
      px={{ base: 24 }}
      fz={{base: 'sm', md: textSize}}
      size={size}
      bg={"transparent"}
      c={computedColorScheme === 'dark' ? theme.colors.blue[5] :theme.colors.blue[6]}
      rightSection={<DownloadIcon/>}
    >
      {'Download CV'}
    </Button>
  )
}
export const MentorCTA: React.FC<{
  size?: 'sm' | 'md' | 'lg'
}> = ({size = 'md'}) => {

  const pSize = size == 'sm' ? 8 : size == 'md' ? 12 : 16
  const textSize = size == 'sm' ? 'xs' : size == 'md' ? 'sm' : 'md'
  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light');

  return (
    <Button
      p={{base: 8, md: pSize}}
      px={{ base: 24 }}
      fz={{base: 'sm', md: textSize}}
      size={size}
      bg={computedColorScheme === 'dark' ? theme.colors.blue[5] :theme.colors.blue[6]}
      rightSection={<ArrowRightIcon/>}
    >
      {'Book an Introductory Session'}
    </Button>
  )
}

export const ReachOutCTA: React.FC<{
  size?: 'sm' | 'md' | 'lg'
}> = ({size = 'md'}) => {

  const pSize = size == 'sm' ? 8 : size == 'md' ? 12 : 16
  const textSize = size == 'sm' ? 'xs' : size == 'md' ? 'sm' : 'md'
  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light');

  return (
    <Button
      p={{base: 8, md: pSize}}
      fz={{base: 'sm', md: textSize}}
      size={size}
      bg={computedColorScheme === 'dark' ? theme.colors.blue[5] :theme.colors.blue[6]}
      rightSection={<ArrowRightIcon/>}
      onClick={() => window.location.href = '/work-with-me'}
    >
      {'Get in Touch'}
    </Button>
  )
}