import type { WritingItemsProps } from "~/utils/interface";
import HalfBox from "../Template/HalfBox";
import { Flex } from "@mantine/core";
import BlogListCard from "../Template/Cards/BlogListCard";
import FeaturedBlogCard from "../Template/Cards/FeaturedBlogCard";

const FeaturedBlogsSection: React.FC<any> = (blogObject) => {

    const blog: WritingItemsProps = blogObject.frontmatter
    return (
        <HalfBox mih={{base: 286, md: 230, lg: 290}}>
            <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 40, md: 60, lg: 80}} px={{base: 20, md: 40, lg: 60}} py={{base: 40, md: 80}}>
                <FeaturedBlogCard {...blog}/>
            </Flex>
        </HalfBox>
    )
}

export default FeaturedBlogsSection