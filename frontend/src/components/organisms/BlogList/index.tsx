'use client'

import React, { useEffect, useState, useContext } from 'react'
import styles from './index.module.css'
import BlogItem from '@/components/molecules/BlogItem'
import { UserContext, UserContextType } from '@/context/UserContextProvider'
import Modal from '@/components/molecules/Modal'
import { useRouter } from 'next/navigation'
import Icon from '@/components/atoms/Icon'

export type BlogItemType = {
  id: string
  title: string
  text: string
  price: string
  userName: string
  media: {
    url: string
  }
}

export const BlogList = () => {
  const [blogList, setBlogList] = useState<BlogItemType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [choosedBlog, setChoosedBlog] = useState<BlogItemType | null>(null)
  const router = useRouter()

  const user = useContext<UserContextType | null>(UserContext)

  // ブログ一覧取得
  useEffect(() => {
    setIsLoading(true)
    const fetchBlogList = async () => {
      const response = await fetch('api/GET').then((res) => res.json())
      setBlogList(response)
      setIsLoading(false)
    }
    fetchBlogList()
  }, [])

  const handleModal = (blog: BlogItemType) => {
    setIsModalOpen(true)
    setChoosedBlog(blog)
  }

  const handleAccept = async () => {
    try {
      const response = await fetch('api/checkout', {
        method: 'POST',
        body: JSON.stringify({
          title: choosedBlog?.title,
          price: choosedBlog?.price,
        }),
      })
      const data = await response.json()
      router.push(data.checkout_url)
    } catch (error) {
      console.error(error)
    }
  }

  const handleCancel = () => setIsModalOpen(false)

  const ModalComonent = () => {
    if (!isModalOpen) return
    return (
      <Modal accept='購入' cancel='キャンセル' onAccept={handleAccept} onCancel={handleCancel}>
        記事を購入しますか?
      </Modal>
    )
  }

  return (
    <div className={styles.wrapper}>
      {isLoading === true && <Icon icon='loading' />}
      <ModalComonent />
      <ul className={styles.list}>
        {blogList.map((v) => (
          <BlogItem blog={v} key={v.id} accept={'購入'} onClick={() => handleModal(v)} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
