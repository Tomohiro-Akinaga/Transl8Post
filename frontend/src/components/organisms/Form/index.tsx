"use client";

import { useRouter } from "next/navigation";
import { TextButton } from "@/components/atoms/TextButton";
import React, { useState } from "react";
import styles from "./index.module.css";

export const Form = () => {
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleAccept = () => {
    console.log(title, text);
  };

  const handleCancel = () => router.push("/");

  return (
    <div className={styles.wrapper}>
      <label>
        タイトル
        <textarea onChange={handleChangeTitle} defaultValue={title} />
      </label>
      <label>
        本文
        <textarea onChange={handleChangeText} defaultValue={text} />
      </label>
      <div className={styles.buttonArea}>
        <TextButton onClick={handleAccept}>作成</TextButton>
        <TextButton onClick={handleCancel}>キャンセル</TextButton>
      </div>
    </div>
  );
};
