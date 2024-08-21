'use client'

import React, { useState, useContext } from 'react'
import styles from './index.module.css'
import { TextButton } from '@/components/atoms/TextButton'
import { TextArea } from '@/components/atoms/TextArea'
import Validation from '@/helpers/validation'
import { UserContext, UserContextType } from '@/context/UserContextProvider'
import InputArea from '@/components/atoms/InputArea'

export const Form = () => {
  const [title, setTitle] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [loadingText, setLoadingText] = useState<string>('')

  const user = useContext<UserContextType | null>(UserContext)
  const userId = user?.sub

  const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value)
  }

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  // 記事作成処理
  const handleAccept = async () => {
    await Validation([title, text, price])

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
          price: price,
          image: image,
        }),
      })

      console.log(response)
      response && setLoadingText('作成しました')
    } catch (error) {
      setLoadingText('作成に失敗しました')
    }
  }

  return (
    <div className={styles.wrapper}>
      <p>{loadingText}</p>
      <TextButton size='small' category='accept' onClick={handleAccept}>
        公開
      </TextButton>
      <InputArea type={'text'} label={'値段'} inputValue={price} setInputValue={setPrice}></InputArea>
      <InputArea type={'file'} label={'画像'} inputValue={image} setInputValue={setImage}></InputArea>
      <TextArea size='small' placeholder='タイトル' onChange={handleChangeTitle}></TextArea>
      <TextArea size='large' placeholder='本文' onChange={handleChangeText}></TextArea>
    </div>
  )
}
