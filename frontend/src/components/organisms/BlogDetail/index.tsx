'use client'

import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import { useParams } from 'next/navigation'
import { TextButton } from '@/components/atoms/TextButton'
import { TextArea } from '@/components/atoms/TextArea'

type Blog = {
  id: string
  title: string
  text: string
  translatedTitle: string
  translatedText: string
}

const BlogDetail = () => {
  /*
   ** TODO: ブログデータを親からPropsで受け取る
   */
  const { id } = useParams<{ id: string }>()
  const [blog, setBlog] = useState<Blog>()
  const [title, setTitle] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [translatedTitle, setTranslatedTitle] = useState<string>('')
  const [translatedText, setTranslatedText] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [process, setProcess] = useState<string>('')

  const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value)
  }

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleChangeTranslatedTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTranslatedTitle(e.target.value)
  }

  const handleChangeTranslatedText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTranslatedText(e.target.value)
  }

  const handleEdit = async () => {
    setProcess('更新中...')
    try {
      const response = await fetch('/api/PUT', {
        method: 'PUT',
        body: JSON.stringify({
          id: id,
          title: title,
          text: text,
          translatedTitle: translatedTitle,
          translatedText: translatedText,
        }),
      })
      setProcess('更新しました')
    } catch (error) {
      console.error('Error updating blog:', error)
      setProcess('更新に失敗しました')
    }
  }

  const handleDelete = async () => {
    try {
      setProcess('削除中...')
      const response = await fetch('/api/DELETE', {
        method: 'DELETE',
        body: JSON.stringify({ id: id }),
      })
      setProcess('削除しました')
    } catch (error) {
      console.error('Error deleting blog:', error)
      setProcess('削除に失敗しました')
    }
  }

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('http://localhost:3000/api/GET')
        const data = await response.json()
        const blog = data.find((v: Blog) => v.id === id)
        setBlog(blog)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBlogs()
  }, [id])

  if (!blog) {
    return <p className={styles.loading}>読み込み中...</p>
  }

  return (
    <div className={styles.wrapper}>
      <TextArea defaultValue={blog.title} onChange={handleChangeTitle} size={'small'} />
      <TextArea defaultValue={blog.text} onChange={handleChangeText} size={'large'} />
      <TextArea defaultValue={blog.translatedTitle} onChange={handleChangeTranslatedTitle} size={'small'} />
      <TextArea defaultValue={blog.translatedText} onChange={handleChangeTranslatedText} size={'large'} />
      <span>{process}</span>
      <div className={styles.actionArea}>
        <TextButton size={'small'} category={'accept'} onClick={handleEdit}>
          更新
        </TextButton>
        <TextButton size={'small'} category={'cancel'} onClick={handleDelete}>
          削除
        </TextButton>
      </div>
    </div>
  )
}

export default BlogDetail
