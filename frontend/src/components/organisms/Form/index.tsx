"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { client } from "../../../../libs/client";
import styles from "./index.module.css";
import { TextButton } from "@/components/atoms/TextButton";
import { TextArea } from "@/components/atoms/TextArea";

export const Form = () => {
  const router = useRouter();

  // 日本語タイトルと本文
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  // 翻訳タイトルと本文
  const [translatedTitle, setTranslatedTitle] = useState<string>("");
  const [translatedText, setTranslatedText] = useState<string>("");

  // ローディング中テキスト
  const [loadingText, setLoadingText] = useState<string>("");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleTranslate = async () => {
    setLoadingText("翻訳中...");
    const res = await fetch("api/translate", {
      method: "POST",
      body: JSON.stringify({
        text: [`${title}`, `${text}`],
        target_lang: "EN",
      }),
    });
    const data = await res.json();
    console.log(data);
    setTranslatedTitle(data.translations[0].text);
    setTranslatedText(data.translations[1].text);
    setLoadingText("翻訳しました");
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
      <h2>翻訳タイトル:{translatedTitle}</h2>
      <h3>翻訳本文:{translatedText}</h3>
      <p>{loadingText}</p>
      <div className={styles.buttonArea}>
        <TextButton onClick={handleTranslate}>翻訳</TextButton>
        <TextButton onClick={handleAccept}>作成</TextButton>
        <TextButton onClick={handleCancel}>キャンセル</TextButton>
      </div>
    </div>
  );
};
