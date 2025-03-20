import { blogs } from "@/.velite/generated";

export default function sitemap() {

    const staticPages = [
        {
            url: "https://thegoatsfx.com/",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://thegoatsfx.com/categories/all",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: "https://thegoatsfx.com/about",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://thegoatsfx.com/contact",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.6,
        },
    ];

    const blogPages = blogs.map((post) => ({
        url: `https://thegoatsfx.com/blogs/${post.slug}`,
        lastModified: new Date(post.publishedAt).toISOString(), // Nếu có ngày cập nhật
        changeFrequency: "daily",
        priority: 0.9,
    }));


    return [...staticPages, ...blogPages];
}
