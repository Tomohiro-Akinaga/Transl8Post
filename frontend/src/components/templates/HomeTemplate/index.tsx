import styles from './index.module.css'
import React from 'react'
import { BlogList } from '../../organisms/BlogList'

export const HomeTemplate = () => {
  return (
    <div className={styles.wrapper}>
      <BlogList />
    </div>
  )
}

export default HomeTemplate
