import HomeTemplate from "@/components/templates/HomeTemplate";
import React from "react";
import { client } from "../../../../libs/client";

const HomePage = async () => {
  const result = await client.get({ endpoint: "blog" });
  console.log(result);
  return <HomeTemplate blogs={result} />;
};

export default HomePage;
