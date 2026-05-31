import type { Config } from "@react-router/dev/config";
import { getBlogSlugsFromDisk } from "./app/utils/blog-slugs";

export default {
  ssr: false,
  async prerender() {
    const blogSlugs = getBlogSlugsFromDisk();
    return [
      "/",
      "/about",
      "/blogs",
      ...blogSlugs.map((slug) => `/blogs/${slug}`),
      "/mentorship",
      "/work-with-me",
    ];
  },
} satisfies Config;
