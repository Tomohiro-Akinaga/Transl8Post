import React from "react";
import styles from "./index.module.css";

const BlogItem = ({ blog }: any) => {
  return (
    <li className={styles.item}>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
    </li>
  );
};

export default BlogItem;
