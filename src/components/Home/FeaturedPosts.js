'use client'

import { sortBlogs } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import BlogLayoutOne from "../Blog/BlogLayoutOne";
// import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const filteredBlog = sortedBlogs?.length > 0 ?
    sortedBlogs.filter((b) => b.tags.includes('news')) : []

  return (
    <section className="bg-white text-black p-2 md:p-6">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main News */}
        <div className="md:col-span-2">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src={filteredBlog[0]?.image?.src}
              blurDataURL={filteredBlog[0]?.image.blurDataURL}
              alt={filteredBlog[0]?.title}
              width={filteredBlog[0].image.width}
              height={filteredBlog[0].image.height}
              placeholder="blur"

              loading="lazy"
              className="w-full md:h-[31rem] object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full">
              <span className="bg-red-600 p-2 rounded-md capitalize text-xs font-bold">
                {filteredBlog[0]?.tags[0]}
              </span>
              <Link href={filteredBlog[0]?.url}>
                <h3 className="text-lg font-bold mt-2">
                  {filteredBlog[0]?.title}
                </h3>
              </Link>

            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold border-l-4 border-red-500 pl-2 mb-4">
            Hot News
          </h2>
          <ul className="space-y-4">

            {
              filteredBlog?.length > 0 &&
              filteredBlog?.slice(1, 7)?.map((b, index) => (
                <li key={index} className="flex items-center gap-3 border-b pb-2">
                  <Link href={b?.url} >
                    <div className="block w-12 h-12">
                      <Image
                        width={b.image.width}
                        height={b.image.height}
                        blurDataURL={b?.image.blurDataURL}
                        placeholder="blur"
                        src={b?.image?.src}
                        alt={b?.title}
                        className="w-12 h-12 rounded"
                      />
                    </div>

                  </Link>
                  <Link href={b?.url}>
                    <p className="text-sm">{b?.title}</p>
                  </Link>

                </li>
              ))
            }
          </ul>
        </div>


      </div>
    </section>

  )

};

export default FeaturedPosts;
