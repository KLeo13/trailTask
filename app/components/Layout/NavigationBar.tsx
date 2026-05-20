import { ActionIcon, Box, Button, Collapse, Flex, Group, Image, Stack, Text, useComputedColorScheme, useMantineColorScheme, useMantineTheme } from "@mantine/core"
import { NavLink } from "react-router";
import { navigationItems } from "~/utils/constant";
import { BarsIcon, MoonIcon, SunIcon } from "~/utils/icons";
import { MainCTA } from "../Action/CTAButtons";
import { useClickOutside, useDisclosure } from "@mantine/hooks";

const NavigationContent: React.FC<{closeMenu?: () => void}> = ({closeMenu}) => {
  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light');
  const { toggleColorScheme } = useMantineColorScheme()

  return (
    <>
      <ActionIcon onClick={() => toggleColorScheme()} bg="transparent" 
        c={computedColorScheme === 'dark' ? theme.colors.gray[4] :theme.colors.gray[6]}>
        {computedColorScheme === 'dark' ? <MoonIcon/>  : <SunIcon/>}
      </ActionIcon>
      {navigationItems.map((item, index) => {
        return (
          <NavLink to={item.to}
            key={index}
            onClick={closeMenu}
            style={({ isActive}) => ({
              color: isActive ? 
                (computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]) : 
                (computedColorScheme === 'dark' ? theme.colors.gray[4] :theme.colors.gray[6])
            })}>
              {item.label}
          </NavLink>
        )
      })}
      <MainCTA size="sm"/>
    </>
  )
}
const NavigationBar: React.FC<{}> = () => {

  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light');

  const [expanded, { toggle, close }] = useDisclosure(false);

  const ref = useClickOutside(() => close());

  return (
    <Stack ref={ref} maw="1440px" mx="auto" px={40}>
      <Flex justify={'space-between'} align={'center'} mih={88} >
        <Image 
          visibleFrom="sm"
          src={computedColorScheme === 'dark' ? '/images/logo-white.png' : '/images/logo-dark.png'} 
          alt="Logo" 
          maw={190}
          w={'100%'}
          miw={140}/>
        <Image 
          src={'/images/icon.png'} 
          alt="Logo" 
          display={{base: 'block', sm: 'none'}}
          w={30} />
        <Flex className="gap-6 items-center" visibleFrom="sm">
          <NavigationContent/>
        </Flex>
        <ActionIcon display={{base: 'block', sm: 'none'}} onClick={toggle} size={'xl'} p={'xs'} c="inherit" bg={computedColorScheme === 'dark' ? theme.colors.blue[8] : theme.white} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.blue[0]}`}>
          <BarsIcon/>
        </ActionIcon>
      </Flex>
      <Collapse expanded={expanded} display={{base: 'block', sm: 'none'}}>
        <Flex direction={'column'}  pb="xl" gap="md" align={'start'}>
          <NavigationContent closeMenu={close}/>
        </Flex>
      </Collapse>
    </Stack>
  )
}

export default NavigationBar