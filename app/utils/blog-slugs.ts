import fs from "node:fs";
import path from "node:path";

const BLOGS_DIR = path.join(process.cwd(), "app/mdx/blogs");

export function getBlogSlugsFromDisk(): string[] {
  return fs
    .readdirSync(BLOGS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
