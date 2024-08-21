import React from 'react'
import styles from './index.module.css'
import { Form } from '@/components/organisms/Form'
import { TextButton } from '@/components/atoms/TextButton'

export const PostBlogTemplate = () => {
  return (
    <div className={styles.wrapper}>
      <Form />
    </div>
  )
}

export default PostBlogTemplate
