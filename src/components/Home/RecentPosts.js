'use client'

import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const filteredBlog = sortedBlogs?.length > 0 ?
    sortedBlogs.filter((b) => !b.tags.includes('news')) : []
  return (
    <section className="w-full  mt-16 p-2   md:px-6  flex flex-col items-center justify-center">
      <div className="w-full flex  justify-between">
        <h2 className="border-l-4 border-red-500 pl-2 w-fit inline-block font-bold capitalize text-xl md:text-3xl text-dark dark:text-light">
          Bài viết gần đây
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2      text-base md:text-lg"
        >
          Xem tất cả
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {filteredBlog.slice(0, 12).map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
