import React from "react";
import styles from "./index.module.css";

interface Props {
  title: string;
  text: string;
  translatedTitle: string;
  translatedText: string;
}

const BlogItem = ({ title, text, translatedTitle, translatedText }: Props) => {
  return (
    <li className={styles.item}>
      <h2>{title}</h2>
      <p>{text}</p>
      <h2>{translatedTitle}</h2>
      <p>{translatedText}</p>
    </li>
  );
};

export default BlogItem;
