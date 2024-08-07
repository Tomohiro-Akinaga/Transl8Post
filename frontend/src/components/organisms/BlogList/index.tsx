"use client";

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { client } from "../../../../libs/client";
import BlogItem from "@/components/molecules/BlogItem";

interface Props {
  id: string;
  title: string;
  text: string;
  translatedTitle: string;
  translatedText: string;
}

export const BlogList = () => {
  const [blogList, setBlogList] = useState<Props[]>([]);
  const [loadingText, setLoadingText] = useState<string>("");

  // ブログ一覧取得
  useEffect(() => {
    setLoadingText("読み込み中...");
    const fetchBlogList = async () => {
      const response = await fetch("api/GET").then((res) => res.json());
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
          id={v.id}
          title={v.title}
          text={v.text}
          translatedTitle={v.translatedTitle}
          translatedText={v.translatedText}
          key={v.id}
        />
      ))}
    </ul>
  );
};

export default BlogList;
