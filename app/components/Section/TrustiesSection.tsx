import { Box, Flex, Image, Pill, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import type { TrustiesPops } from "~/utils/interface";

const TrustiesSection: React.FC<TrustiesPops> = ({title, description, trustyBrands}) => {

  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  return (
      <section className="py-20 overflow-hidden" style={{backgroundColor: computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[0]}}>
        <Flex direction={{lg: 'row', base: 'column'}} maw={1440} mx={'auto'} px={{base: 20, md: 40}} justify={"space-between"} align={'center'}>
          <Flex direction={'column'} gap="md" justify={'center'}>
            <h2 id="trusty-title" className="text-4xl font-bold text-center xl:text-start" style={{
              color: computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]
            }}>{title}</h2>
            <Text id='trusty-description' fz={'md'} ta={{base: 'center', lg: 'start'}}>
              {description}
            </Text>
          </Flex>
          <Box w={{base: '100%', sm: 656}} h={233} pos={'relative'}>
            <Image src={'/images/world.png'} maw={{base: 430, sm: 598}} w={'100%'} pos={'absolute'} top={0}
              className={`left-1/2 -translate-x-1/2
              `}
            />
            {
              trustyBrands.map((brand, index) => {
                return (
                  <Flex id={`trustie-item-${index}`} bdrs={'lg'} align={'center'} p={6} px={10} bg={ computedColorScheme === 'dark' ? theme.colors.blue[8] : "white" } key={index} pos={'absolute'} className={brand.classTransform}>
                    <Image src={brand.thumb} w={20} h={20} me="sm"/>
                    <Text className="text-nowrap">{brand.label}</Text>
                  </Flex>
                )
              })
            }
          </Box>
        </Flex>
      </section>
  )
}

export default TrustiesSection;