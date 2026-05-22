import { Card, Flex, Grid, List, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { iconMap, servicesItems } from "~/utils/constant";
import type { ServiceProps, ServicesItemsProps } from "~/utils/interface";
import SecondaryCard from "../Template/Cards/SecondaryCard";
const ServiceCard: React.FC<{item: ServicesItemsProps, index: number}> = ({item, index}) => {

  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light');

  return (
    <SecondaryCard id={`service-item-${index}`}
      icon={item.icon}
      title={item.title}
      description={item.description}
      extraContent={
        <>
          <List listStyleType="disc" c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>
            {item.list.map((listItem, index) => {
              return (
                <List.Item key={index}>{listItem}</List.Item>
              )
            })}
          </List>
      </>
      }/>
  )
}
const ServicesSection: React.FC<ServiceProps> = ({title, description, serviceItems}) => {
  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light');

  return (
    <section className="" style={{
      backgroundColor: computedColorScheme === 'dark' ? theme.colors.blue[8] : theme.white
    }}>
      <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 40, md: 60, lg: 80}} px={{base: 20, md: 40}} py={{base: 40, md: 80}}>
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