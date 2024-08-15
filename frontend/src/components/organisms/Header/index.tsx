'use client'

import React from 'react'
import styles from './index.module.css'
import TextLink from '@/components/atoms/TextLink'
import SiteLogo from '@/components/atoms/SiteLogo'
import { useUser } from '@auth0/nextjs-auth0/client'

export const Header = () => {
  const { user } = useUser()
  console.log(user?.name)

  return (
    <header className={styles.header}>
      <SiteLogo />
      <div className={styles.inner}>
        <TextLink href='/'>ホーム</TextLink>
        <TextLink href='/edit' icon={'pen'}>
          投稿
        </TextLink>
        <TextLink href='/api/auth/login'>ログイン</TextLink>
      </div>
    </header>
  )
}

export default Header
