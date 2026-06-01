import { useLoaderData, useSearchParams } from "react-router";
import BlogsHeaderSection from "~/components/Section/BlogsHeaderSection";
import BlogsListSection from "~/components/Section/BlogsListSection";
import { getCategoryBySlug } from "~/utils/blog-categories";
import { loadBlogs } from "~/utils/blogs";
import type { Route } from "./+types/blog-category";

export function meta({ params }: Route.MetaArgs) {
  const category = getCategoryBySlug(params.categorySlug);
  if (!category) {
    return [{ title: "Not Found | Jake Sta. Teresa" }];
  }
  return [
    { title: `${category} | Writings | Jake Sta. Teresa` },
    {
      name: "description",
      content: `Articles about ${category.toLowerCase()} from Jake Sta. Teresa.`,
    },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const category = getCategoryBySlug(params.categorySlug);
  if (!category) {
    throw new Response(null, { status: 404 });
  }
  return { category };
}

export default function BlogCategory() {
  const { category } = useLoaderData() as { category: string };
  const blogs = loadBlogs();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  return (
    <>
      <BlogsHeaderSection
        title={category}
        description={`Articles about ${category.toLowerCase()}.`}
        searchQuery={searchQuery}
        setSearchParams={setSearchParams}
      />
      <BlogsListSection
        blogs={blogs}
        searchQuery={searchQuery}
        activeCategory={category}
      />
    </>
  );
}
