"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";

export const Header = () => {
  const pathname = usePathname();

  const href = pathname === "/edit" ? "/" : "/edit";
  const linkText = pathname === "/edit" ? "TOP" : "記事を作成";

  return (
    <header className={styles.header}>
      <h1>Trans8Post</h1>
      <Link href={href}>{linkText}</Link>
    </header>
  );
};

export default Header;
