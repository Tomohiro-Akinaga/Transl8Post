import React from 'react'
import Link from 'next/link'
import styles from './index.module.css'
import { BlogItemType } from '@/components/organisms/BlogList/index'
import { TextButton } from '@/components/atoms/TextButton'

interface Props {
  blog: BlogItemType
}

const BlogItem = ({ blog }: Props) => {
  const { id, title, text, price, media, userName } = blog

  return (
    <Link href={`/blogs/${id}`} className={styles.item}>
      <img src={media.url} alt='記事画像' />
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.price}>￥{price}</span>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{
            __html: `${text}`,
          }}
        ></div>
        <TextButton category='accept' size='small'>
          購入
        </TextButton>
      </div>
    </Link>
  )
}

export default BlogItem
