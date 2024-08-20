'use client'

import React, { useState, useContext } from 'react'
import styles from './index.module.css'
import { TextButton } from '@/components/atoms/TextButton'
import { TextArea } from '@/components/atoms/TextArea'
import Validation from '@/helpers/validation'
import { UserContext, UserContextType } from '@/context/UserContextProvider'

export const Form = () => {
  // 日本語タイトルと本文
  const [title, setTitle] = useState<string>('')
  const [text, setText] = useState<string>('')

  // 翻訳タイトルと本文
  const [translatedTitle, setTranslatedTitle] = useState<string>('')
  const [translatedText, setTranslatedText] = useState<string>('')

  // ローディング中テキスト
  const [loadingText, setLoadingText] = useState<string>('')

  //ユーザーContext
  const user = useContext<UserContextType | null>(UserContext)
  const userId = user?.sub

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

      /*
       ** TODO: ユーザーIDはDBを用意して取得するように変更
       */
      const response = await fetch('/api/POST', {
        method: 'POST',
        body: JSON.stringify({
          userId: userId,
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
      <TextArea size='small' placeholder='タイトル'></TextArea>
      <TextArea size='large' placeholder='本文'></TextArea>
    </div>
  )
}
