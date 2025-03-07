import { slug } from "github-slugger";
import React from "react";
import Category from "./Category";

const Categories = ({ categories, currentSlug }) => {

  return (
    <div className=" px-0 md:px-4 mt-10 border-t text-dark dark:text-light border-b border-solid border-[#ccc] dark:border-light py-4 flex items-start flex-wrap font-medium ">
      {categories.map((cat) => (
        <Category
          key={cat}
          link={`/categories/${cat}`}
          name={cat}
          active={currentSlug === slug(cat)}
        />
      ))}
    </div>
  );
};

export default Categories;
