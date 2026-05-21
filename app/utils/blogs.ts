export function loadBlogs() {
    const modules = import.meta.glob<any>(
        "../mdx/blogs/*.mdx",
        { eager: true }
    );
    return modules
}
