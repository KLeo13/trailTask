import { Box, Flex, Grid, Image, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core"
import { GridIcon } from "~/utils/icons"
import { MainCTA } from "../Action/CTAButtons";

const CTASection: React.FC<{}> = () => {

  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
      <section className="p-10 md:p-20" style={{
        backgroundColor: computedColorScheme === 'dark' ? theme.colors.blue[8] : theme.white
      }}>
        <Flex direction={'column'} align={'center'} maw={1440} mx={'auto'} px={{base: 20, md: 40}} pos={'relative'} className="overflow-hidden" >
          <Box pos={'absolute'} bdrs={'lg'} w={'100%'} className="overflow-hidden opacity-50"
            style={{
              background: `linear-gradient(180deg, ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[2]} 0%, ${computedColorScheme === 'dark' ? theme.colors.blue[8] :  theme.white } 100%)`,
            }}>
            <GridIcon/>
          </Box>
          <Flex direction={'column'} className="z-10" justify={'center'} align={'center'} py={50} gap={40}>
            <Flex bg={computedColorScheme === 'dark' ? theme.colors.blue[8] : theme.white} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.gray[0]}`} p={5} px={15} bdrs={'xl'} align={'center'} gap={6} mb={20}>
              <Box w={6} h={6} className="bg-green-700" bdrs={'100%'}/>
              <Text size="sm">{'Available for new projects '}</Text>
            </Flex>
            <h2 className="text-6xl text-center" style={{color: computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5] }}>{'Have a project in mind?'}</h2>
            <Text ta={'center'}>{'I’m always open to collaborating on meaningful products and solving complex problems together.'}</Text>
            <MainCTA size="lg"/>
          </Flex>
        </Flex>

      </section>
  )
}

export default CTASection