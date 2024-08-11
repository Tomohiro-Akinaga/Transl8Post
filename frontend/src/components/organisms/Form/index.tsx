'use client'

import React, { useState } from 'react'
import styles from './index.module.css'
import { TextButton } from '@/components/atoms/TextButton'
import { TextArea } from '@/components/atoms/TextArea'
import Validation from '@/helpers/validation'

export const Form = () => {
  // 日本語タイトルと本文
  const [title, setTitle] = useState<string>('')
  const [text, setText] = useState<string>('')

  // 翻訳タイトルと本文
  const [translatedTitle, setTranslatedTitle] = useState<string>('')
  const [translatedText, setTranslatedText] = useState<string>('')

  // ローディング中テキスト
  const [loadingText, setLoadingText] = useState<string>('')

  const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value)
  }

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  // 翻訳処理
  const handleTranslate = async () => {
    setLoadingText('翻訳中...')

    const response = await fetch('api/translate', {
      method: 'POST',
      body: JSON.stringify({
        text: [`${title}`, `${text}`],
        target_lang: 'EN',
      }),
    })
    const data = await response.json()
    console.log(data)

    /*
     ** TODO: インデックス以外での取得を検討
     */
    setTranslatedTitle(data.translations[0].text)
    setTranslatedText(data.translations[1].text)
    setLoadingText('翻訳しました')
  }

  // 記事作成処理
  const handleAccept = async () => {
    await Validation([title, text, translatedTitle, translatedText])

    try {
      setLoadingText('作成中...')

      const response = await fetch('/api/POST', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          text: text,
          translatedTitle: translatedTitle,
          translatedText: translatedText,
        }),
      })

      response && setLoadingText('作成しました')
    } catch (error) {
      setLoadingText('作成に失敗しました')
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputArea}>
        <TextArea size={'small'} placeholder={'タイトル'} onChange={handleChangeTitle} />
        <TextArea size={'large'} placeholder={'本文'} onChange={handleChangeText} />
      </div>
      <TextButton size={'small'} category={'accept'} onClick={handleTranslate}>
        翻訳
      </TextButton>
      <div className={styles.translationArea}>
        <span>{loadingText}</span>
        <TextArea size={'small'} placeholder={'翻訳タイトル'} defaultValue={translatedTitle} readOnly={true} />
        <TextArea size={'large'} placeholder={'翻訳本文'} defaultValue={translatedText} readOnly={true} />
      </div>
      <div className={styles.buttonArea}>
        <TextButton size={'large'} category={'accept'} onClick={handleAccept}>
          作成
        </TextButton>
      </div>
    </div>
  )
}
