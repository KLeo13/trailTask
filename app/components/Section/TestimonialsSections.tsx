import { Box, Flex, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core"
import CustomCarousel from "../Plugins/Carousel"

const TestimonialsSections: React.FC<{}> = ({}) => {
  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
      <section className="py-5 relative z-10">
        <Box pos={'absolute'} top={0} left={0} w={'100%'} mih={{base: 348, md: 400}} bg={theme.colors.blue[6]} className="-z-10"/>
        <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 40}} px={{base: 20, md: 40, lg: 60}} pt={{base: 40, md: 80}} pb={{base: 20, md: 40}}>
          <Flex direction={'column'} gap="md">
            <h2 className="text-4xl font-bold text-center text-white" >{'Testimonials'}</h2>
            <Text fz={'md'} ta="center" c="white">
              {'What colleagues and clients say about working with me:'}
            </Text>
          </Flex>
          <CustomCarousel/>
        </Flex>
    </section>
  )
}

export default TestimonialsSections