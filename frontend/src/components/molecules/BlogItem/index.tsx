import React from "react";

interface Props {
  title: string;
  description: string;
}

const BlogItem = ({ blog }: Props) => {
  return (
    <li>
      <h2>ブログタイトル</h2>
      <p>ブログ内容</p>
    </li>
  );
};

export default BlogItem;
