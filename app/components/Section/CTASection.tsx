import { Box, Flex, Grid, Image, Stack, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core"
import { GridIcon } from "~/utils/icons"
import { MainCTA } from "../Action/CTAButtons";
import type { CollaborationProps } from "~/utils/interface";

const CTASection: React.FC<CollaborationProps> = ({title, description, availability}) => {

  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light');

  return (
      <section className="" style={{
        backgroundColor: computedColorScheme === 'dark' ? theme.colors.blue[8] : theme.white
      }}>
        <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 40}} px={{base: 20, md: 40, lg: 60}} pt={{base: 40, md: 80}} pb={{base: 20, md: 40}}>
          <Flex w={'100%'} direction={'column'} align={'center'} pos={'relative'} className="overflow-hidden" >
            <Box pos={'absolute'} bdrs={'lg'} w={'100%'} h={'auto'} className="overflow-hidden opacity-50"
              style={{
                objectFit: 'cover',
                background: `linear-gradient(180deg, ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]} 0%, ${computedColorScheme === 'dark' ? theme.colors.blue[8] :  theme.white } 100%)`,
              }}>
              <Image w={'100%'} h={'100%'} style={{objectFit: 'cover'}} src={'/images/tiles.png'} bdrs={'lg'}/>
            </Box>
            <Flex direction={'column'} className="z-10" justify={'center'} align={'center'} py={80} gap={40}>
              <Stack gap={24} align="center">
                  <Flex bg={computedColorScheme === 'dark' ? theme.colors.blue[8] : theme.white} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.gray[2]}`} p={5} px={15} bdrs={'xl'} align={'center'} gap={6} mb={20}>
                    <Box className="relative flex size-2">
                      <Box className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75`} bg={availability.classColor}></Box>
                      <Box className={`relative inline-flex size-2 rounded-full`} bg={availability.classColor}></Box>
                    </Box>
                    <Text id="collab-availability" size="sm">{availability.label}</Text>
                  </Flex>
                  <h2 id="collab-title" className="text-6xl text-center" style={{color: computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5] }}>{title}</h2>
                  <Text id="collab-description" ta={'center'}>{description}</Text>
              </Stack>
              <MainCTA size="lg"/>
            </Flex>
          </Flex>
        </Flex>
      </section>
  )
}

export default CTASection