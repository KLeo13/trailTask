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
    
    const blogsData = {
        headerData: {
            title: 'Writings',
            description: 'On building reliable systems, leading teams , and applying AI in production.' 
        },
    }
    return blogsData
}
export default function Blogs() {

    const { headerData } = useLoaderData() as {
        headerData: WritingHeaderProps,
    }
    const blogs = loadBlogs()
    const featuredBlog = Object.entries(blogs)[0]

    return (
        <>
            <BlogsHeaderSection {...headerData}/>
            <FeaturedBlogsSection {...featuredBlog}/>
            <BlogsListSection {...blogs}/>
        </>
    )
}