"use client";

import React, { createContext, useEffect, useState } from "react";

import HomeTemplate from "@/components/templates/HomeTemplate";
import { client } from "../../../../libs/client";

interface Props {
  /**
   * TODO: レスポンスの型定義
   */
}

export const BlogsContext = createContext<Props[]>([]);

const HomePage = () => {
  const [data, setData] = useState<Props[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.getAllContents({ endpoint: "blog" });
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <BlogsContext.Provider value={data}>
      <HomeTemplate />
    </BlogsContext.Provider>
  );
};

export default HomePage;
