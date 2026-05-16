import { AppShell, Box, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import NavigationBar from "./components/Layout/NavigationBar";
import { Outlet } from "react-router";
import Footer from "./components/Layout/Footer";

export default function App() {

  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light');

  return <>
    {computedColorScheme}
    <AppShell
      bg={computedColorScheme === 'dark' ? theme.colors.darkBlue[0] : theme.white}
      c={computedColorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[6]}>
      <AppShell.Header mih={88}
        bg={computedColorScheme === 'dark' ? theme.colors.darkBlue[0] : theme.white}
        bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`}
        style={{boxShadow: `0px 2px 10px 6px ${computedColorScheme === 'dark' ? 'rgba(3, 84, 166, 0.08)' : 'rgba(1, 17, 33, 0.04)'}`}}
      >
        <NavigationBar/>
      </AppShell.Header>
      <AppShell.Main pt={88}>
        <Outlet/>
        <Box bg={theme.colors.blue[6]} px={40} py={60}>
          <Footer/>
        </Box>
      </AppShell.Main>
    </AppShell>
  </>;
}