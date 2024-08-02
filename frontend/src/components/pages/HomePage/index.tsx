import HomeTemplate from "@/components/templates/HomeTemplate";
import React from "react";
import { client } from "../../../../libs/client";

const HomePage = async () => {
  const result = await client.getAllContents({ endpoint: "blog" });

  return <HomeTemplate />;
};

export default HomePage;
