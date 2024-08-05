"use client";

import { useRouter } from "next/navigation";
import { TextButton } from "@/components/atoms/TextButton";
import React, { useState } from "react";
import styles from "./index.module.css";
import { client } from "../../../../libs/client";

export const Form = () => {
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [loadingText, setLoadingText] = useState<string>("");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleAccept = async () => {
    setLoadingText("作成中...");
    try {
      const response = await client.create({
        endpoint: "blog",
        content: JSON.parse(`{"title":"${title}", "body":"${text}"}`),
      });
      response && setLoadingText("作成しました");
    } catch (error) {
      setLoadingText("作成に失敗しました");
    }
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
      <p>{loadingText}</p>
      <div className={styles.buttonArea}>
        <TextButton onClick={handleAccept}>作成</TextButton>
        <TextButton onClick={handleCancel}>キャンセル</TextButton>
      </div>
    </div>
  );
};
