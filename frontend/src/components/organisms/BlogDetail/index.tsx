"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";

type Blog = {
  id: string;
  title: string;
  text: string;
  translatedTitle: string;
  translatedText: string;
};

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/GET").then(
          (res) => res.json()
        );
        const data = response.find((v: Blog) => v.id === id);
        setBlog(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      {isLoading && <p>読み込み中...</p>}
      <h2>{blog?.title}</h2>
      <p>{blog?.text}</p>
      <h3>{blog?.translatedTitle}</h3>
      <p>{blog?.translatedText}</p>
    </div>
  );
};

export default BlogDetail;
