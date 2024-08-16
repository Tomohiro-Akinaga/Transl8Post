import React from 'react'
import styles from './index.module.css'
import TextLink from '@/components/atoms/TextLink'
import SiteLogo from '@/components/atoms/SiteLogo'
import { getSession } from '@auth0/nextjs-auth0'

export const Header = async () => {
  const session = await getSession()
  const userId = session ? session.user.sub : ''

  const AuthLink = () => {
    const text = userId ? 'ログアウト' : 'ログイン'
    const href = userId ? '/api/auth/logout' : '/api/auth/login'

    return <TextLink href={href}>{text}</TextLink>
  }
  return (
    <header className={styles.header}>
      <SiteLogo />
      <div className={styles.inner}>
        <TextLink href='/'>ホーム</TextLink>
        <TextLink href='/edit' icon={'pen'}>
          投稿
        </TextLink>
        <AuthLink />
      </div>
    </header>
  )
}

export default Header
