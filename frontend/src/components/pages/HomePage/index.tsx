"use client";

import React, { createContext, useEffect, useState } from "react";

import HomeTemplate from "@/components/templates/HomeTemplate";
import { client } from "../../../../libs/client";

interface Props {
  id: string;
  title: string;
  body: string;
}

export const BlogsContext = createContext<Props[]>([]);

const HomePage = () => {
  const [data, setData] = useState<Props[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.getAllContents({ endpoint: "blog" });
      setData(result);
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
