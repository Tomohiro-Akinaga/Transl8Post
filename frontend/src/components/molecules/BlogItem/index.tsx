import React from "react";
import styles from "./index.module.css";

interface Props {
  title: string;
  body: string;
}

const BlogItem = ({ title, body }: Props) => {
  return (
    <li className={styles.item}>
      <h2>{title}</h2>
      <p>{body}</p>
    </li>
  );
};

export default BlogItem;
