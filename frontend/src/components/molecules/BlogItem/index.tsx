import React from 'react'
import Link from 'next/link'
import styles from './index.module.css'

interface Props {
  blog: Blog
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
