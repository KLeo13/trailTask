export async function loadBlogs() {
    const modules = import.meta.glob<any>(
        "../mdx/blogs/*.mdx",
        {
            eager: true,
        }
    );
    const blogs = Object.values(modules);
    return blogs
}
