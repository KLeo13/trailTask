import { Box, Button, Card, Flex, Image, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { writingItems } from "~/utils/constant";
import type { WritingItemsProps } from "~/utils/interface";

const WritingCard: React.FC<{item: WritingItemsProps, type: 'main' | 'thumb'}> = ({item, type = 'main'}) => {
  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  return (
    <Card p={"md"} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`} h={"100%"} bg={computedColorScheme === 'dark' ? theme.colors.blue[8] : 'white'} c="inherit">
      <Flex direction={{base: 'column', xs: type === 'main' ? 'column' : 'row'}} gap={'sm'}>
        <Image bdrs={'md'} src={item.image} alt={item.image} w={type === 'main' ? {base: 582, xs: '100%'} : {base: '100%', xs: 180}} h={type === 'main' ? 319 : '100%'}/>
        <Flex direction={"column"} gap="sm" justify={'center'}>
          <Flex gap="sm" c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>
            <Text fz={'sm'}>{item.category}</Text>
            <Text fz={'sm'}>•</Text>
            <Text fz={'sm'} c={computedColorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[6]}>{item.date}</Text>
          </Flex>
          <Text fz={24} fw={"bold"} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>{item.title}</Text>
          <Text display={type === 'main' ? 'block' : 'none'} className="line-clamp-3">{item.content}</Text>
        </Flex>
      </Flex>
    </Card>
  )
}
const WritingSection: React.FC<{}> = () => {

  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <section className="" style={{
      backgroundColor: computedColorScheme === 'dark' ? theme.colors.blue[8] : theme.white
    }}>
      <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 20, md: 40}} px={{base: 20, md: 40, lg: 60}} pt={{base: 40, md: 80}} pb={{base: 20, md: 40}}>
        <Flex direction={'column'} gap="md">
          <h2 className="text-4xl font-bold text-center" style={{
            color: computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]
          }}>{'Writings'}</h2>
          <Text fz={'md'} ta="center">
            {'Sharing thoughts,  lessons, ideas, and practical insights from building and scaling software.'}
          </Text>
        </Flex>
        <Flex direction={{base: 'column', md: 'row'}} gap={'sm'}>
          <Box flex={1}>
            <WritingCard item={writingItems[0]} type="main"/>
          </Box>
          <Flex direction={'column'} gap={'sm'} flex={1}>
            {writingItems.slice(1, 4).map((item, index) => {
              return (
                <WritingCard item={item} type="thumb" key={index}/>
              )
            })}
          </Flex>
        </Flex>
        <Button className="self-center" size="lg"
          bg={computedColorScheme === 'dark' ? theme.colors.blue[5] :theme.colors.blue[6]}>{'View More'}</Button>
      </Flex>
    </section>
  )
}

export default WritingSection