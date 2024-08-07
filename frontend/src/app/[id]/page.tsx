"use client";

import React from "react";
import { useParams } from "next/navigation";

const BlogDetail = () => {
  const params = useParams();
  /*
   ** TODO: contextで一元管理したブログデータを取得
   */
  return (
    <div>
      <p>{params.id}</p>
    </div>
  );
};

export default BlogDetail;
