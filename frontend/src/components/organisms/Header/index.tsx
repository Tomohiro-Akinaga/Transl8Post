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
      label: '投稿記事の管理',
      href: '/edit',
    },
    {
      label: '購入した記事',
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

  const HomeLink = () => {
    if (!session) return
    return <TextLink href='/'>ホーム</TextLink>
  }

  const PostLink = () => {
    if (!session) return
    return (
      <TextLink href='/post' icon={'pen'}>
        投稿
      </TextLink>
    )
  }

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
        <HomeLink />
        <PostLink />
        <AuthLink />
      </div>
    </header>
  )
}

export default Header
