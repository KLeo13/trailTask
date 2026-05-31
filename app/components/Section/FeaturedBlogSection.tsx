import type { WritingItemsProps } from "~/utils/interface";
import HalfBox from "../Template/HalfBox";
import { Flex } from "@mantine/core";
import FeaturedBlogCard from "../Template/Cards/FeaturedBlogCard";
import { getBlogSlug } from "~/utils/blogs";

const FeaturedBlogsSection: React.FC<any> = (blogObject) => {
    const path = blogObject[0] as string;
    const module = blogObject[1];
    const { excerpt, ...rest } = module.frontmatter;
    const blog: WritingItemsProps = {
        ...rest,
        description: excerpt ?? rest.description ?? "",
        slug: getBlogSlug(path, module),
    };

    return (
        <HalfBox mih={{base: 286, md: 230, lg: 290}}>
            <Flex direction="column" maw={1440} mx={'auto'} gap={{base: 40, md: 60, lg: 80}} px={{base: 20, md: 40, lg: 60}} py={{base: 40, md: 80}}>
                <FeaturedBlogCard {...blog}/>
            </Flex>
        </HalfBox>
    )
}

export default FeaturedBlogsSection