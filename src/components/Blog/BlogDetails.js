import { format, parseISO } from "date-fns";
import { vi } from "date-fns/locale";
import Link from "next/link";
import React from "react";

import ViewCounter from "./ViewCounter";

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div className="italic py-2 flex items-center  flex-wrap text-[12px] border-y  my-2 border-y-[#dddd]">
      <time className="m-3">
        Ngày đăng {format(parseISO(blog.publishedAt), "dd/mm/yyyy", { locale: vi })}
      </time>
      <span>|</span>
      <span className="m-3">
        <ViewCounter slug={blogSlug} />
      </span>
      <span>|</span>
      <div className="m-3">{blog.readingTime.text}</div>


      <span>|</span>
      <div className="m-3">Tác giả : The Goats</div>
    </div>
  );
};

export default BlogDetails;
