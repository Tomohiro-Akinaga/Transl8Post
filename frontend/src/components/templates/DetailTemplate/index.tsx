import React from 'react'
import styles from './index.module.css'
import BlogDetail from '@/components/organisms/BlogDetail/index'

const DetailTemplate = () => {
  return (
    <div className={styles.wrapper}>
      <BlogDetail />
    </div>
  )
}

export default DetailTemplate
