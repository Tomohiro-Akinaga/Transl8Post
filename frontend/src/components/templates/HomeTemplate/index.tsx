import React from "react";
import styles from "./index.module.css";
import Header from "@/components/organisms/Header";
import Main from "@/components/organisms/Main";

const HomeTemplate = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
    </div>
  );
};

export default HomeTemplate;
