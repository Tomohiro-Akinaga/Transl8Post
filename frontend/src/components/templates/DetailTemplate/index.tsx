import React from "react";
import styles from "./index.module.css";
import Header from "@/components/organisms/Header";
import BlogDetail from "@/components/organisms/BlogDetail";

const DetailTemplate = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <BlogDetail />
    </div>
  );
};

export default DetailTemplate;
