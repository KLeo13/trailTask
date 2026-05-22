import { Box, Button, Card, Flex, Image, Text, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { writingItems } from "~/utils/constant";
import type { WritingItemsProps, WritingsProps } from "~/utils/interface";
import PrimaryCard from "../Template/Cards/PrimaryCard";
import { PrimaryButton } from "../Action/CTAButtons";

export const WritingCard: React.FC<{item: WritingItemsProps, type: 'main' | 'thumb', index: number}> = ({item, type = 'main', index}) => {
  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light');
  return (
    <Card flex={1} id={`article-item-${index}`} p={"md"} bd={`solid 1px ${computedColorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[1]}`} bg={computedColorScheme === 'dark' ? theme.colors.blue[8] : 'white'} c="inherit">
      <Flex direction={{base: 'column', xs: type === 'main' ? 'column' : 'row'}} gap={'sm'} h={'100%'}>
        <Image bdrs={'md'} src={item.image} alt={item.image} w={type === 'main' ? {base: 582, xs: '100%'} : {base: '100%', xs: 180}} h={type === 'main' ? 319 : '100%'}/>
        <Flex direction={"column"} gap="sm" justify={'center'}>
          <Flex gap="sm" c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>
            <Text fz={'sm'}>{item.category}</Text>
            <Text fz={'sm'}>•</Text>
            <Text fz={'sm'} c={computedColorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[6]}>{item.date}</Text>
          </Flex>
          <Text fz={24} fw={"bold"} c={computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]}>{item.title}</Text>
          <Text display={type === 'main' ? 'block' : 'none'} className="line-clamp-3">{item.description}</Text>
        </Flex>
      </Flex>
    </Card>
  )
}
const WritingSection: React.FC<WritingsProps & {blogs: any}> = ({title, description, writingItems, blogs}) => {

  const theme = useMantineTheme()
  const computedColorScheme = useComputedColorScheme('light');

  const blogList = Object.entries(blogs).map(([path, blog]: any) => {
      return {
          ...blog.frontmatter,
          slug: path.split("/").pop()?.replace(".mdx", "")
      }
  });
  return (
    <section className="" style={{
      backgroundColor: computedColorScheme === 'dark' ? theme.colors.blue[8] : theme.white
    }}>
      <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 20, md: 40}} px={{base: 20, md: 40, lg: 60}} py={{base: 40, md: 80}}>
        <Flex direction={'column'} gap="md">
          <h2 id={`writing-title`} className="text-4xl font-bold text-center" style={{
            color: computedColorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[5]
          }}>{title}</h2>
          <Text id={`writing-description`} fz={'md'} ta="center">
            {description}
          </Text>
        </Flex>
        <Flex direction={{base: 'column', md: 'row'}} gap={'sm'}>
          <Box flex={1}>
            <WritingCard index={0} item={blogList[0]} type="main"/>
          </Box>
          <Flex direction={'column'} gap={'sm'} flex={1}>
            {blogList.slice(1, 4).map((item, index) => {
              return (
                <WritingCard index={index+1} item={item} type="thumb" key={index}/>
              )
            })}
          </Flex>
        </Flex>
        <Flex justify={'center'}>
          <PrimaryButton onClick={() => window.location.href = '/writings'}>{'View More'}</PrimaryButton>
        </Flex>
      </Flex>
    </section>
  )
}

export default WritingSection