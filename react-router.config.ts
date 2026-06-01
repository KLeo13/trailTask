import type { Config } from "@react-router/dev/config";
import { getBlogCategorySlugsFromDisk } from "./app/utils/blog-category-slugs";
import { getBlogSlugsFromDisk } from "./app/utils/blog-slugs";

export default {
  ssr: false,
  async prerender() {
    const blogSlugs = getBlogSlugsFromDisk();
    const categorySlugs = getBlogCategorySlugsFromDisk();
    return [
      "/",
      "/about",
      "/blogs",
      ...blogSlugs.map((slug) => `/blogs/${slug}`),
      ...categorySlugs.map((slug) => `/blogs/categories/${slug}`),
      "/mentorship",
      "/work-with-me",
    ];
  },
} satisfies Config;
