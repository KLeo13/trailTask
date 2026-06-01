import fs from "node:fs";
import path from "node:path";
import { slugifyCategory } from "./category-slug";

const BLOGS_DIR = path.join(process.cwd(), "app/mdx/blogs");
const CATEGORY_FRONTMATTER_REGEX = /^category:\s*"?([^"\n]+)"?/m;

function extractCategoryFromMdx(content: string): string | undefined {
  const match = content.match(CATEGORY_FRONTMATTER_REGEX);
  return match?.[1]?.trim();
}

export function getBlogCategorySlugsFromDisk(): string[] {
  const categories = fs
    .readdirSync(BLOGS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const content = fs.readFileSync(path.join(BLOGS_DIR, file), "utf-8");
      return extractCategoryFromMdx(content);
    })
    .filter((category): category is string => Boolean(category));

  return Array.from(new Set(categories.map(slugifyCategory)));
}
