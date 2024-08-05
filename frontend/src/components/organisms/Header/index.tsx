"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";

export const Header = () => {
  const pathname = usePathname();

  const EditButton = () => {
    if (pathname !== "/edit") {
      return <Link href={"/edit"}>記事を作成</Link>;
    }
  };

  return (
    <header className={styles.header}>
      <h1>Trans8Post</h1>
      <EditButton />
    </header>
  );
};

export default Header;
