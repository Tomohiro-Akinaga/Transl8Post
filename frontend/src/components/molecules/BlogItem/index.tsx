import React from "react";
import Link from "next/link";
import styles from "./index.module.css";

interface Props {
  id: string;
  title: string;
  text: string;
  translatedTitle: string;
  translatedText: string;
}

const BlogItem = ({
  id,
  title,
  text,
  translatedTitle,
  translatedText,
}: Props) => {
  return (
    <Link href={`/${id}`} className={styles.item}>
      <h2>{title}</h2>
      <p>{text}</p>
      <h2>{translatedTitle}</h2>
      <p>{translatedText}</p>
    </Link>
  );
};

export default BlogItem;
