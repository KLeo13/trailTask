import { availability } from "~/utils/constant";
import type { Route } from "./+types/blog";
import { useLoaderData } from "react-router";
import { getBlogBySlug, loadBlogs } from "~/utils/blogs";
import BlogPageSection from "~/components/Section/BlogPageSection";
import RelatedBlogSection from "~/components/Section/RelatedBlogSection";
import type { CollaborationProps } from "~/utils/interface";
import CTASection from "~/components/Section/CTASection";

export function meta({ params }: Route.MetaArgs) {
  const post = getBlogBySlug(params.slug);
  if (!post) {
    return [{ title: "Not Found | Jake Sta. Teresa" }];
  }
  const { title, excerpt } = post.module.frontmatter;
  return [
    { title: `${title} | Jake Sta. Teresa` },
    { name: "description", content: excerpt },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const post = getBlogBySlug(params.slug);
  if (!post) {
    throw new Response(null, { status: 404 });
  }
  return {
    collabData: {
      title: `Have a project in mind?`,
      description: `I'm always open to collaborating on meaningful products and solving complex problems together.`,
      availability: availability[0],
    },
  };
}

export default function Blog({ params }: Route.LoaderArgs) {
  const post = getBlogBySlug(params.slug);
  if (!post) {
    throw new Response(null, { status: 404 });
  }

  const relevantBlogs = loadBlogs();
  const { collabData } = useLoaderData() as {
    collabData: CollaborationProps;
  };

  return (
    <>
      <BlogPageSection {...post.module} />
      <RelatedBlogSection {...relevantBlogs} />
      <CTASection {...collabData} />
    </>
  );
}
