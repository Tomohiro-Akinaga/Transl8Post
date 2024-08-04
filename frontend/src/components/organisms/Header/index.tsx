"use client";

import React from "react";
import styles from "./index.module.css";
import { TextButton } from "@/components/atoms/TextButton";

export const Header = () => {
  const handleClick = () => {
    console.log("ブログ作成ボタンがクリックされました");
    /*
     ** TODO: 作成ボタン押下でブログ作成ページに遷移
     */
  };
  return (
    <header className={styles.header}>
      <h1>Trans8Post</h1>
      <TextButton onClick={handleClick}>記事を作成</TextButton>
    </header>
  );
};

export default Header;
