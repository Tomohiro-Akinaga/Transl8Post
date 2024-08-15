import React from 'react'
import styles from './index.module.css'
import TextLink from '@/components/atoms/TextLink'
import SiteLogo from '@/components/atoms/SiteLogo'

export const Header = () => {
  return (
    <header className={styles.header}>
      <SiteLogo />
      <div className={styles.inner}>
        <TextLink href='/'>ホーム</TextLink>
        <TextLink href='/edit' icon={'pen'}>
          投稿
        </TextLink>
        <TextLink href='/login'>ログイン</TextLink>
      </div>
    </header>
  )
}

export default Header
