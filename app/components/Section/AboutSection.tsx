import { Box, Button, Card, Chip, Collapse, Flex, Grid, Image, Pill, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { aboutItems, iconMap } from "~/utils/constant"
import { BranchIcon, GradIcon, SuitcaseIcon } from "~/utils/icons"
import type { AboutItemsProps, AboutMetricProps, AboutProps } from "~/utils/interface"
import { MainCTA } from "../Action/CTAButtons"

const MetricComponent: React.FC<AboutMetricProps & {index: number}> = ({title, description, icon, index}) => {
  return (
    <Flex id={`metric-item-${index}`} gap={'sm'} direction={'column'}>
      <Text fz={36} fw={'bold'}>{title}</Text>
      <Flex gap={'xs'}>        
        {iconMap[icon]} 
        <Text fz={'lg'}>{description}</Text>
      </Flex>
    </Flex>
  )
}

const AboutItemCard: React.FC<{item: AboutItemsProps, index: number}> = ({item, index}) => {
  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const [expanded, { toggle }] = useDisclosure(false);
  
  return (
    <Card id={`feature-item-${index}`} p={'md'} bg={computedColorScheme === 'dark' ? theme.colors.blue[8] : 'white'} bdrs={'md'} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`} h={expanded ? '100%' : 'auto'} display={'flex'} className="flex-col gap-6 justify-start"
      style={{boxShadow: `0px 2px 10px 6px ${computedColorScheme === 'dark' ? 'rgba(3, 84, 166, 0.08)' : 'rgba(1, 17, 33, 0.04)'}`}}>
      <Flex w={52} h={52} p={'xs'} bg={computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]} bdrs={'md'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>
        {iconMap[item.icon]} 
      </Flex> 
      <Text fz={24} fw={'bold'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>{item.title}</Text>
      <Text className={`${!expanded ? 'line-clamp-3' : ''}`}>{item.description}</Text>
      <Collapse expanded={expanded} className="flex flex-col gap-4">
        <Text fz='lg' c={computedColorScheme === 'dark' ? 'white' : 'black'}>{item.subTitle}:</Text>
        <Text>{item.subDescription}</Text>
        <Text fz='lg' c={computedColorScheme === 'dark' ? 'white' : 'black'}>{item.keywordTitle}:</Text>
        <Flex direction={'column'} align={'start'} gap="sm">
          {item.keywords.map((keyword, index) => {
            return (
              <Text key={index} bg={computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]} bdrs={'10rem'} size="sm" p={8} display={'flex'}>{keyword}</Text>
            )
          })}
        </Flex>
      </Collapse>
      <Button display={'flex'} variant="transparent" p={0} fw={'normal'} mt={'auto'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]} onClick={toggle}>
        {expanded ? `Show less -` :`Show more +`}
      </Button>
    </Card>
  )
}
const AboutSection: React.FC<AboutProps> = ({title, description, image, metricItems, aboutItems }) => {
  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  
  return (
    <>
      <section className="relative z-10" style={{
        backgroundColor: computedColorScheme === 'dark' ? theme.colors.blue[8] : theme.white
      }}>
        <Box pos={'absolute'} top={0} left={0} w={'100%'} mih={{base: 1027, md: 591, lg: 770}} bg={theme.colors.blue[6]} className="-z-10"/>
        <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 40, md: 60, lg: 80}} px={{base: 20, md: 40, lg: 60}} pt={{base: 40, md: 80}} pb={{base: 20, md: 40}}>
          <Flex direction={'row'} align={'center'} gap={60}>
            <Box w={456} h={456} p={'sm'} bg={'#FFFFFF1A'} bdrs={24} visibleFrom="md">
              <Image src={image} alt="about-image" w={428} h={428} bdrs={20}/>
            </Box>
            <Flex flex={`1`} c="white" direction={'column'} gap={{base: 40, lg: 60}}>
              <Flex direction={'column'} gap={20}>
                <h2 id="about-title" className="text-4xl font-bold">{title}</h2>
                <Text id="about-description">{description}</Text>
              </Flex>
              <Flex gap={40} direction={{base: 'column', sm: 'row'}}>
                {metricItems.map((item, index) => {
                  return (
                    <MetricComponent index={index} key={index} title={item.title} description={item.description} icon={item.icon}/>
                  )
                })}
              </Flex>
            </Flex>
          </Flex>
          <Grid gap={32} align="stretch">
            {
              aboutItems.map((item, index) => {
                return (
                  <Grid.Col key={index} span={{base: 12, md: 6, lg: 3}}>
                    <AboutItemCard index={index} item={item}/>
                  </Grid.Col>
                )
              })
            }
          </Grid>
          <Flex direction={{base: 'column', sm: 'row'}} justify={{base: 'center'}} align={{base: 'start', sm: 'center'}} gap={'md'} p="sm" bdrs={"md"} bg={computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]} >
            <Text fw={'bold'} c={theme.colors.blue[5]}>{'Got a project?'}</Text>
            <Text>{'Let’s build something great together.'}</Text>
            <MainCTA size="lg"/>
          </Flex>
        </Flex>
      </section>
    </>
  )
}
export default AboutSection