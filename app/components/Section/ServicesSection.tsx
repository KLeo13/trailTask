import { Card, Flex, Grid, List, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { iconMap, servicesItems } from "~/utils/constant";
import type { ServiceProps, ServicesItemsProps } from "~/utils/interface";
const ServiceCard: React.FC<{item: ServicesItemsProps, index: number}> = ({item, index}) => {

  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <Card id={`service-item-${index}`} c={'inherit'} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`} bg={computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[0]} bdrs={'md'} p={'lg'} shadow="sm" display={'flex'} className="flex-col gap-5 h-full">
      <Flex w={52} h={52} p={'xs'} bg={computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[6]} bdrs={'md'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : 'white'}>
        {iconMap[item.icon]} 
      </Flex> 
      <Text fz={24} fw={'bold'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>{item.title}</Text>
      <Text>{item.description}</Text>
      <List listStyleType="disc" c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>
        {item.list.map((listItem, index) => {
          return (
            <List.Item key={index}>{listItem}</List.Item>
          )
        })}
      </List>
    </Card>
  )
}
const ServicesSection: React.FC<ServiceProps> = ({title, description, serviceItems}) => {
  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <section className="" style={{
      backgroundColor: computedColorScheme === 'dark' ? theme.colors.blue[8] : theme.white
    }}>
      <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 40, md: 60, lg: 80}} px={{base: 20, md: 40, lg: 60}} pt={{base: 40, md: 80}} pb={{base: 20, md: 40}}>
        <Flex direction={'column'} gap="md">
          <h2 id='service-title' className="text-4xl font-bold text-center" style={{
            color: computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]
          }}>{title}</h2>
          <Text id='service-description' fz={'md'} ta="center">
            {description}
          </Text>
        </Flex>
        <Grid gap={"xl"}>
          {
            serviceItems.map((item, index) => {
              return (
                <Grid.Col span={{base: 12, md: 6}} key={index}>
                  <ServiceCard index={index} item={item}/>
                </Grid.Col>
              )
            })
          }
        </Grid>
      </Flex>
    </section>
  )
}

export default ServicesSection