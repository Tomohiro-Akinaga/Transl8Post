"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";
import { TextButton } from "../../atoms/TextButton";

export const Header = () => {
  const pathname = usePathname();

  const href = pathname !== "/edit" ? "/edit" : "/";

  const text = pathname !== "/edit" ? "記事作成" : "TOP";

  return (
    <header className={styles.header}>
      <h1>Trans8Post</h1>
      <TextButton>
        <Link href={href}>{text}</Link>
      </TextButton>
    </header>
  );
};

export default Header;
