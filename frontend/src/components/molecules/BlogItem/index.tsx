import React from 'react'
import Link from 'next/link'
import styles from './index.module.css'
import { BlogItemType } from '@/components/organisms/BlogList/index'
import parse from 'html-react-parser'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'

interface Props {
  blog: BlogItemType
}

const BlogItem = ({ blog }: Props) => {
  const { id, title, text, price, media, userName } = blog

  return (
    <Link href={`/${id}`} className={styles.item}>
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
        <span className={styles.name}>{userName}</span>
      </div>
    </Link>
  )
}

export default BlogItem
