import React from "react";
import styles from "./index.module.css";
import { client } from "../../../../libs/client";
import BlogItem from "@/components/molecules/BlogItem";

const fetchBlogList = async () => {
  const response = await client.getAllContents({
    customRequestInit: { cache: "no-store" },
    endpoint: "blog",
  });

  return response;
};

export const BlogList = async () => {
  const blogList = await fetchBlogList();
  console.log(blogList);
  return (
    <ul className={styles.list}>
      {blogList.map((v) => (
        <BlogItem blog={v} />
      ))}
    </ul>
  );
};

export default BlogList;
