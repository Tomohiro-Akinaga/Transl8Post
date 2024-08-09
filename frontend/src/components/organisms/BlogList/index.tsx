'use client'

import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import BlogItem from '@/components/molecules/BlogItem'

export const BlogList = () => {
  const [blogList, setBlogList] = useState<Blog[]>([])
  const [loadingText, setLoadingText] = useState<string>('')

  // ブログ一覧取得
  useEffect(() => {
    setLoadingText('読み込み中...')
    const fetchBlogList = async () => {
      const response = await fetch('api/GET').then((res) => res.json())
      setBlogList(response)
      setLoadingText('')
    }
    fetchBlogList()
  }, [])

  return (
    <>
      <p>{loadingText}</p>
      <ul className={styles.list}>
        {blogList.map((v) => (
          <BlogItem blog={v} key={v.id} />
        ))}
      </ul>
    </>
  )
}

export default BlogList
