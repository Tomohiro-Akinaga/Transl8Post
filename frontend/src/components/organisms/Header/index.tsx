import React from 'react'
import styles from './index.module.css'
import { TextButton } from '@/components/atoms/TextButton'
import SiteLogo from '@/components/atoms/SiteLogo'
import HeaderActionArea from '@/components/molecules/HeaderActionArea'

export const Header = () => {
  return (
    <header className={styles.header}>
      <SiteLogo />
      <HeaderActionArea />
      {/* <TextButton category={'auth'}>ログアウト</TextButton> */}
    </header>
  )
}

export default Header
