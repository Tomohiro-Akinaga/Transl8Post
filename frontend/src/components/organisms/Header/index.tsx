"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";

export const Header = () => {
  const pathname = usePathname();

  const href = pathname === "/" ? "/edit" : "/";
  const text = pathname === "/" ? "記事を作成" : "TOP";

  return (
    <header className={styles.header}>
      <Link href={"/"}>Trans8Post</Link>
    </header>
  );
};

export default Header;
