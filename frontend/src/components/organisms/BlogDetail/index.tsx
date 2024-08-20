'use client'

import React from 'react'
import styles from './index.module.css'
import { useParams } from 'next/navigation'

const BlogDetail = () => {
  const params = useParams()

  return <div className={styles.wrapper}>BlogDetail</div>
}

export default BlogDetail
