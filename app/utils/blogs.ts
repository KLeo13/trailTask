export function loadBlogs() {
  const modules = import.meta.glob<any>("../mdx/blogs/*.mdx", { eager: true });
  return modules;
}

export function getSlugFromMdxPath(mdxPath: string): string {
  return mdxPath.split("/").pop()?.replace(".mdx", "") ?? "";
}

export function getBlogSlug(
  mdxPath: string,
  module: { frontmatter?: { slug?: string } }
): string {
  return module.frontmatter?.slug ?? getSlugFromMdxPath(mdxPath);
}

export function getBlogBySlug(slug: string) {
  const modules = loadBlogs();
  const entry = Object.entries(modules).find(
    ([path, module]) => getBlogSlug(path, module) === slug
  );
  return entry ? { path: entry[0], module: entry[1] } : undefined;
}

export function mapBlogsToListItems(blogs: ReturnType<typeof loadBlogs>) {
  return Object.entries(blogs).map(([path, blog]) => {
    const { excerpt, ...rest } = blog.frontmatter;
    return {
      ...rest,
      description: excerpt ?? rest.description ?? "",
      slug: getBlogSlug(path, blog),
    };
  });
}
