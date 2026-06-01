import { slugifyCategory } from "./category-slug";
import { loadBlogs } from "./blogs";

export { slugifyCategory } from "./category-slug";

export function getCategoriesFromBlogs(): string[] {
  const blogs = loadBlogs();
  const categories = Object.values(blogs).map(
    (blog) => blog.frontmatter?.category as string | undefined
  );
  return Array.from(new Set(categories.filter(Boolean) as string[]));
}

export function getCategoryBySlug(slug: string): string | undefined {
  return getCategoriesFromBlogs().find(
    (category) => slugifyCategory(category) === slug
  );
}
