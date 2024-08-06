"use client";

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { client } from "../../../../libs/client";
import BlogItem from "@/components/molecules/BlogItem";

interface Props {
  title: string;
  text: string;
  translatedTitle: string;
  translatedText: string;
}

export const BlogList = () => {
  const [blogList, setBlogList] = useState<Props[]>([]);
  const [loadingText, setLoadingText] = useState<string>("");

  useEffect(() => {
    setLoadingText("読み込み中...");
    const fetchBlogList = async () => {
      const response = await client.getAllContents({
        customRequestInit: { cache: "no-store" },
        endpoint: "blog",
      });
      setBlogList(response);
      setLoadingText("");
    };
    fetchBlogList();
  }, []);

  return (
    <ul className={styles.list}>
      <p>{loadingText}</p>
      {blogList.map((v, i) => (
        <BlogItem
          title={v.title}
          text={v.text}
          translatedTitle={v.translatedTitle}
          translatedText={v.translatedText}
          key={i}
        />
      ))}
    </ul>
  );
};

export default BlogList;
