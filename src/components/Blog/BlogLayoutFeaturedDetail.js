import { cx } from "@/src/utils";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogfeaturedDetail = ({ blog, className, layout = 'horizontal' }) => {
  return (
    <div className={cx("group grid grid-cols-12 gap-4 items-center text-dark dark:text-light", className)}>
      <Link
        href={blog.url}
        className=" col-span-12  h-[150px] rounded-xl overflow-hidden"
      >
        <Image
          src={blog.image.src}
          placeholder="blur"
          blurDataURL={blog.image.blurDataURL}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="col-span-12   w-full">

        <Link href={blog.url} className="inline-block my-1">
          <h2 className="font-semibold capitalize text-md">
            <span
              className="bg-gradient-to-r from-accent/50 dark:from-accentDark/50 to-accent/50 dark:to-accentDark/50 bg-[length:0px_1px]
                group-hover:bg-[length:100%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className="inline-block w-full capitalize text-gray dark:text-light/50 font-semibold  text-[12px]">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogfeaturedDetail;
