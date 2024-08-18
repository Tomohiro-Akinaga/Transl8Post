'use client'

import React, { useEffect, useState, useContext } from 'react'
import styles from './index.module.css'
import BlogItem from '@/components/molecules/BlogItem'
import { UserContext, UserContextType } from '@/context/UserContextProvider'

export type BlogItemType = {
  id: string
  title: string
  text: string
  translatedTitle: string
  translatedText: string
}

export const BlogList = () => {
  const [blogList, setBlogList] = useState<BlogItemType[]>([])
  const [loadingText, setLoadingText] = useState<string>('')

  const user = useContext<UserContextType | null>(UserContext)
  const userId = user?.sub

  // ブログ一覧取得
  useEffect(() => {
    setLoadingText('読み込み中...')
    const fetchBlogList = async () => {
      const response = await fetch('api/GET').then((res) => res.json())
      console.log(response)
      setBlogList(response)
      setLoadingText('')
    }
    fetchBlogList()
  }, [])

  return (
    <div className={styles.wrapper}>
      <p>{loadingText}</p>
      <ul className={styles.list}>
        {blogList.map((v) => (
          <BlogItem blog={v} key={v.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
