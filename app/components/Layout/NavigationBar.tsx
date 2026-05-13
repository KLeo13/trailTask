import { ActionIcon, Box, Button, Collapse, Flex, Group, Image, Text, useComputedColorScheme, useMantineColorScheme, useMantineTheme } from "@mantine/core"
import { NavLink } from "react-router";
import { navigationItems } from "~/utils/constant";
import { BarsIcon, MoonIcon, SunIcon } from "~/utils/icons";
import { MainCTA } from "../Action/CTAButtons";
import { useDisclosure } from "@mantine/hooks";

const NavigationContent: React.FC<{}> = ({}) => {
  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
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
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const [expanded, { toggle }] = useDisclosure(false);

  return (
    <>
      <Box maw="1440px" mx="auto" px={40} mih={88} display={"flex"} className="items-center justify-between">
        <Image 
          src={computedColorScheme === 'dark' ? '/images/logo-white.png' : '/images/logo-dark.png'} 
          alt="Logo" 
          w={190} />
        <Flex className="gap-6 items-center" visibleFrom="sm">
          <NavigationContent/>
        </Flex>
        <ActionIcon className="block md:!hidden" onClick={toggle} size={'xl'} c="inherit" bg={computedColorScheme === 'dark' ? theme.colors.blue[8] : theme.white} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.blue[0]}`}>
          <BarsIcon/>
        </ActionIcon>
      </Box>
      <Collapse expanded={expanded}>
        <Flex direction={'column'} px={40} py="sm" gap="sm" align={'start'}>
          <NavigationContent/>
        </Flex>
      </Collapse>
    </>
  )
}

export default NavigationBar