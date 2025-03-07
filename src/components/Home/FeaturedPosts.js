import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import React from "react";
// import BlogLayoutOne from "../Blog/BlogLayoutOne";
// import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const filteredBlog = sortedBlogs?.length > 0 ?
    sortedBlogs.filter((b) => b.tags.includes('news')) : []

  return (
    <section className="bg-white text-black p-6">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Hot News Sidebar */}
        <div className="md:col-span-2">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={filteredBlog[0]?.image?.src}
              alt=""
              className="w-full h-[31rem] object-cover"
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
                  <Link href={b?.url} className="block w-20 h-12">
                    <img
                      src={b?.image?.src}
                      alt=""
                      className="w-12 h-12 rounded"
                    />
                  </Link>
                  <Link href={b?.url}>
                    <p className="text-sm">{b?.title}</p>
                  </Link>

                </li>
              ))
            }


            {/* <li className="flex items-center gap-3 border-b pb-2">
              <img
                src={sortedBlogs[2]?.image?.src}
                alt=""
                className="w-12 h-12 rounded"
              />
              <p className="text-sm">{sortedBlogs[2]?.title}</p>
            </li>
            <li className="flex items-center gap-3 border-b pb-2">
              <img
                src={sortedBlogs[3]?.image?.src}
                alt=""
                className="w-12 h-12 rounded"
              />
              <p className="text-sm">{sortedBlogs[3]?.title}</p>
            </li>
            <li className="flex items-center gap-3 border-b pb-2">
              <img
                src={sortedBlogs[3]?.image?.src}
                alt=""
                className="w-12 h-12 rounded"
              />
              <p className="text-sm">{sortedBlogs[3]?.title}</p>
            </li> */}
          </ul>
        </div>
        {/* Main News */}

      </div>
    </section>

  )
  // return <section className="w-full mt-8  flex flex-col items-center justify-center">
  //   <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">Bài viết nổi bật</h2>

  //   <div className="grid grid-cols-3 grid-rows-3 gap-6  mt-10 sm:mt-16">
  //     <article className=" col-span-2  sxl:col-span-2 row-span-2 relative">
  //       <BlogLayoutOne blog={sortedBlogs[0]} />
  //     </article>
  //     <article className=" col-span-1 sm:col-span-1 row-span-3 relative">
  //       <BlogLayoutTwo blog={sortedBlogs[1]} />

  //     </article>

  //     <article className="col-span-1 sm:col-span-1 row-span-1 relative">
  //       <BlogLayoutTwo blog={sortedBlogs[2]} />

  //     </article>
  //     <article className="col-span-1 sm:col-span-1 row-span-1 relative">
  //       <BlogLayoutTwo blog={sortedBlogs[2]} />

  //     </article>
  //   </div>
  // </section>;
};

export default FeaturedPosts;
