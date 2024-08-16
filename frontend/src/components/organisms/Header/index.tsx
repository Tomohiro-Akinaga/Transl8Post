import React from 'react'
import styles from './index.module.css'
import TextLink from '@/components/atoms/TextLink'
import SiteLogo from '@/components/atoms/SiteLogo'
import { getSession } from '@auth0/nextjs-auth0'
import PullDownMenu from '@/components/molecules/PullDownMenu'

export const Header = async () => {
  // ログインしているユーザー情報を取得
  const session = await getSession()
  const user = session?.user

  // プロフィールメニューに表示するリンク
  const profileMenu = [
    {
      label: '記事の管理',
      href: '',
    },
    {
      label: 'イイネした記事',
      href: '',
    },
    {
      label: 'アカウント設定',
      href: '',
    },
    {
      label: 'ログアウト',
      href: '/api/auth/logout',
    },
  ]

  const AuthLink = () => {
    if (session)
      return (
        <PullDownMenu
          category={'profile'}
          userEmail={user?.email}
          iconURL={user?.picture}
          menu={profileMenu}
        ></PullDownMenu>
      )
    return <TextLink href='/api/auth/login'>ログイン</TextLink>
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
