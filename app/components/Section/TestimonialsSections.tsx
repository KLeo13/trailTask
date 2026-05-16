import { Box, Button, Card, Flex, Image, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core"
import CustomCarousel from "../Plugins/Carousel"
import type { TestimonialItemProps, TestimonialProps } from "~/utils/interface";
import { testimonials } from "~/utils/constant";
import HalfBox from "../Template/HalfBox";

const ItemCard: React.FC<{item: TestimonialItemProps}> = ({item}) => {

  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (    
    <Card p={'md'} bg={computedColorScheme === 'dark' ? theme.colors.blue[8] : 'white'} bdrs={'md'} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`} h={'100%'} display={'flex'} className="flex-col gap-6 justify-start" c="inherit" shadow="sm">
      <Flex gap="md">
        <Image src={item.avatar} w={50} h={50} bdrs={'100%'}/>
        <Box>
          <Text fz="xl" c={computedColorScheme === 'dark' ? 'white' : 'black'}>{item.name}</Text>
          <Text fz="sm">{item.position}</Text>
        </Box>
      </Flex>
      <Text className="line-clamp-5">“{item.testimony}</Text>
      <Button display={'flex'} variant="transparent" p={0} fw={'normal'} mt={'auto'} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>
        {'Show more +'}
      </Button>
    </Card>
  )
}

const TestimonialsSections: React.FC<TestimonialProps> = ({title, description, testimonialItems}) => {
  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <HalfBox mih={{base: 348, md: 400}}>
      <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 40}} px={{base: 20, md: 40, lg: 60}} pt={{base: 40, md: 80}} pb={{base: 20, md: 40}}>
        <Flex direction={'column'} gap="md">
          <h2 id="testimonial-title" className="text-4xl font-bold text-center text-white" >{title}</h2>
          <Text id="testimonial-description" fz={'md'} ta="center" c="white">
            {description}
          </Text>
        </Flex>
        <CustomCarousel
          items={testimonialItems}
          renderItem={(item) => <ItemCard item={item} />}
        />
      </Flex>
    </HalfBox>
  )
}

export default TestimonialsSections