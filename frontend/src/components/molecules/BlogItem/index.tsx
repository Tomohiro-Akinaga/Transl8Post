import React from 'react'
import Link from 'next/link'
import styles from './index.module.css'
import { BlogItemType } from '@/components/organisms/BlogList/index'

// type Blog = {
//   id: string
//   title: string
//   text: string
//   translatedTitle: string
//   translatedText: string
// }

//　BlogItemTypeはBlogResponseTypeと別に作る

interface Props {
  blog: BlogItemType
}

const BlogItem = ({ blog }: Props) => {
  const { id, title, text, translatedTitle, translatedText } = blog

  return (
    <Link href={`/${id}`} className={styles.item}>
      <span className={styles.span}>{id}</span>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <h3 className={[styles['title'], styles['small']].join(' ')}>{translatedTitle}</h3>
      <p className={[styles['text'], styles['small']].join(' ')}>{translatedText}</p>
    </Link>
  )
}

export default BlogItem
