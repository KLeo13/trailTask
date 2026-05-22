import { Button, Text, useComputedColorScheme, useMantineTheme, type ButtonProps } from "@mantine/core"
import { useHover } from "@mantine/hooks"
import { ArrowRightIcon, DownloadIcon } from "~/utils/icons"
type PrimaryButtonProps = any & {
  children: React.ReactNode;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light');

  const { size = 'md', children, ...rest } = props
  const { hovered, ref } = useHover();

  const py = size == 'sm' ? 8 : size == 'md' ? 12 : 14
  const px = size == 'sm' || size == 'md' ? 20 : 24
  return (
  <Button
      ref={ref}
      classNames={{
        root: 'h-auto!',
        inner: 'justify-between gap-1',
        section: 'm-0!'
      }}
      px={px}
      py={py}
      fz={'md'}
      fw={'normal'}
      bg={computedColorScheme === 'dark' ? (hovered ? theme.colors.blue[6] : theme.colors.blue[5] ) : hovered ? theme.colors.blue[5] : theme.colors.blue[6]}
      {...rest}
    >
      {children}
    </Button>
  )
}
export const SecondaryButton: React.FC<PrimaryButtonProps> = (props) => {
  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light');

  const { size = 'md', children, ...rest } = props
  const { hovered, ref } = useHover();

  const py = size == 'sm' ? 8 : size == 'md' ? 12 : 14
  const px = size == 'sm' || size == 'md' ? 20 : 24
  return (
  <Button
      ref={ref}
      classNames={{
        root: 'h-auto!',
        inner: 'justify-between gap-1',
        section: 'm-0!'
      }}
      px={px}
      py={py}
      fz={'md'}
      fw={'normal'}
      bg={"transparent"}
      c={computedColorScheme === 'dark' ? (hovered ? theme.colors.blue[6] : theme.colors.blue[5] ) : hovered ? theme.colors.blue[5] : theme.colors.blue[6]}
      {...rest}
    >
      {children}
    </Button>
  )
}
export const MainCTA: React.FC<{
  size?: 'sm' | 'md' | 'lg'
}> = ({size = 'md'}) => {

  return (
    <PrimaryButton
      size={size}
      rightSection={<ArrowRightIcon/>}
      onClick={() => window.location.href = '/work-with-me'}
    >
      {'Work with me'}
    </PrimaryButton>
  )
}
export const DownloadCTA: React.FC<{
  size?: 'sm' | 'md' | 'lg'
}> = ({size = 'md'}) => {

  return (
    <SecondaryButton
      size={size}
      rightSection={<DownloadIcon/>}
    >
      {'Download CV'}
    </SecondaryButton>
  )
}
export const MentorCTA: React.FC<{
  size?: 'sm' | 'md' | 'lg'
}> = ({size = 'md'}) => {

  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light');

  return (
    <PrimaryButton
      size={size}
      bg={computedColorScheme === 'dark' ? theme.colors.blue[5] :theme.colors.blue[6]}
      rightSection={<ArrowRightIcon/>}
    >
      {'Book an Introductory Session'}
    </PrimaryButton>
  )
}

export const ReachOutCTA: React.FC<{
  size?: 'sm' | 'md' | 'lg'
}> = ({size = 'md'}) => {

  return (
    <PrimaryButton
      size={size}
      rightSection={<ArrowRightIcon/>}
      onClick={() => window.location.href = '/work-with-me'}
    >
      {'Get in Touch'}
    </PrimaryButton>
  )
}