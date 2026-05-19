import { useLoaderData } from "react-router"
import BlogsHeaderSection from "~/components/Section/BlogsHeaderSection"
import BlogsListSection from "~/components/Section/BlogsListSection"
import FeaturedBlogsSection from "~/components/Section/FeaturedBlogSection"
import { writingItems } from "~/utils/constant"
import type { WritingHeaderProps, WritingItemsProps } from "~/utils/interface"


/* export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio | Jake Sta. Teresa" },
    { name: "description", content: "20+ years building scalable, user-centric products across AI, fintech, health tech, and enterprise." },
  ];
} */
export async function loader(){
    const blogsData = {
        headerData: {
            title: 'Writings',
            description: 'On building reliable systems, leading teams , and applying AI in production.' 
        },
        featuredData: writingItems[0],
        blogListData: {
            blogList: writingItems
        }
    }
    return blogsData
}
export default function Blogs() {

    const { headerData, featuredData, blogListData } = useLoaderData() as {
        headerData: WritingHeaderProps,
        featuredData: WritingItemsProps,
        blogListData: {blogList: WritingItemsProps[]}
    }
    return (
        <>
            <BlogsHeaderSection {...headerData}/>
            <FeaturedBlogsSection {...featuredData}/>
            <BlogsListSection {...blogListData}/>
        </>
    )
}