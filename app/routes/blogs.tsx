import { useLoaderData } from "react-router"
import BlogsHeaderSection from "~/components/Section/BlogsHeaderSection"
import BlogsListSection from "~/components/Section/BlogsListSection"
import FeaturedBlogsSection from "~/components/Section/FeaturedBlogSection"
import { writingItems } from "~/utils/constant"
import type { WritingHeaderProps, WritingItemsProps } from "~/utils/interface"
import type { Route } from "./+types/blogs"
import { loadBlogs } from "~/utils/blogs"


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Writings | Jake Sta. Teresa" },
    { name: "description", content: "20+ years building scalable, user-centric products across AI, fintech, health tech, and enterprise." },
  ];
}
export async function loader(){
    
    const blogs = await loadBlogs()
    const blogsData = {
        headerData: {
            title: 'Writings',
            description: 'On building reliable systems, leading teams , and applying AI in production.' 
        },
        blogs: blogs
    }
    return blogsData
}
export default function Blogs() {

    const { headerData, blogs } = useLoaderData() as {
        headerData: WritingHeaderProps,
        blogs: any
    }
    return (
        <>
            <BlogsHeaderSection {...headerData}/>
            <FeaturedBlogsSection {...blogs[0]}/>
            <BlogsListSection {...blogs}/>
        </>
    )
}