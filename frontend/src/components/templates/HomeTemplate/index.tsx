import React, { useContext } from "react";
import styles from "./index.module.css";
import Header from "@/components/organisms/Header";
import Main from "@/components/organisms/Main";
import { BlogsContext } from "@/components/pages/HomePage";

const HomeTemplate = () => {
  const blogs = useContext(BlogsContext);
  console.log(blogs);
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
    </div>
  );
};

export default HomeTemplate;
