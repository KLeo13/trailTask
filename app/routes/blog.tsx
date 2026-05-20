import { availability, writingItems } from "~/utils/constant";
import type { Route } from "./+types/blog";
import { useLoaderData } from "react-router";
import { loadBlogs } from "~/utils/blogs";
import BlogPageSection from "~/components/Section/BlogPageSection";
import RelatedBlogSection from "~/components/Section/RelatedBlogSection";
import type { CollaborationProps } from "~/utils/interface";
import CTASection from "~/components/Section/CTASection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Writings | Jake Sta. Teresa" },
    { name: "description", content: "20+ years building scalable, user-centric products across AI, fintech, health tech, and enterprise." },
  ];
}

export async function loader(){
    const data = {
        collabData: {
            title: `Have a project in mind?`,
            description: `I’m always open to collaborating on meaningful products and solving complex problems together.`,
            availability: availability[0],
        }
    }
    return data
}
export default function Blog({params}: Route.LoaderArgs) {

    const modules = import.meta.glob<any>(
        "../mdx/blogs/*.mdx",
        { eager: true }
    );

    const entry = Object.entries(modules).find(([path]) => {
        return path.split("/").pop()?.replace(".mdx", "") === params.slug;
    });

    const blog = entry?.[1];
    const relevantBlogs = Object.entries(modules).map((blogs) => blogs[1])

    const { collabData } = useLoaderData() as {
        collabData: CollaborationProps
    }
    return (
        <>
            <BlogPageSection {...blog}/>
            <RelatedBlogSection {...relevantBlogs}/>
            <CTASection {...collabData}/>
        </>
    )
}