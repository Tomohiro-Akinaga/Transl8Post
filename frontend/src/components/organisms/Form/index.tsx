"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { client } from "../../../../libs/client";
import styles from "./index.module.css";
import { TextButton } from "@/components/atoms/TextButton";
import { TextArea } from "@/components/atoms/TextArea";

export const Form = () => {
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [loadingText, setLoadingText] = useState<string>("");

  async function getData() {
    const res = await fetch("/api/translate");
    console.log(res);
  }

  const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleTranslate = async () => {
    const res = await fetch("api/translate", {
      method: "POST",
      body: JSON.stringify({
        text: ["Hello, world!"],
        target_lang: "JA",
      }),
    });
    const data = await res.json();
    console.log(data);
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
      <TextArea label={"タイトル"} onChange={handleChangeTitle} />
      <TextArea label={"本文"} onChange={handleChangeText} />
      <p>{loadingText}</p>
      <div className={styles.buttonArea}>
        <TextButton onClick={handleTranslate}>翻訳</TextButton>
        <TextButton onClick={handleAccept}>作成</TextButton>
        <TextButton onClick={handleCancel}>キャンセル</TextButton>
      </div>
    </div>
  );
};
