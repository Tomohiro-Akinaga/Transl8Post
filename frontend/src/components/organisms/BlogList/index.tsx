"use client";

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { client } from "../../../../libs/client";
import BlogItem from "@/components/molecules/BlogItem";

interface Props {
  title: string;
  body: string;
}

export const BlogList = () => {
  const [blogList, setBlogList] = useState<Props[]>([]);

  useEffect(() => {
    const fetchBlogList = async () => {
      const response = await client.getAllContents({
        customRequestInit: { cache: "no-store" },
        endpoint: "blog",
      });
      setBlogList(response);
    };
    fetchBlogList();
  }, []);

  return (
    <ul className={styles.list}>
      {blogList.map((v, i) => (
        <BlogItem title={v.title} body={v.body} key={i} />
      ))}
    </ul>
  );
};

export default BlogList;
