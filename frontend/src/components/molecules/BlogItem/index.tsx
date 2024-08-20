import React from 'react'
import Link from 'next/link'
import styles from './index.module.css'
import { BlogItemType } from '@/components/organisms/BlogList/index'
import { TextButton } from '@/components/atoms/TextButton'

interface Props {
  blog: BlogItemType
  accept: string
  onClick: () => void
}

const BlogItem = ({ blog, accept, onClick }: Props) => {
  const { id, title, text, price, media } = blog

  return (
    <div className={styles.item}>
      <img src={media.url} alt='' />
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.price}>￥{price}</span>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{
            __html: `${text}`,
          }}
        ></div>
        <TextButton category='accept' size='small' onClick={onClick}>
          {accept}
        </TextButton>
      </div>
    </div>
  )
}

export default BlogItem
