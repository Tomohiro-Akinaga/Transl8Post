'use client'

import React, { PropsWithChildren, useState } from 'react'
import IconButton from '../../atoms/IconButton/IconButton'
import TextLink from '@/components/atoms/TextLink'
import styles from './index.module.css'

interface Props {
  userEmail: string
  category: 'profile'
  iconURL: string
  menu: { label: string; href: string }[]
}

const Dropdown = ({ children, userEmail, category, iconURL, menu }: PropsWithChildren<Props>) => {
  // プルダウン開閉状態
  const [isOpen, setIsOepn] = useState(false)

  // プルダウン開閉状態の切り替え
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    // e.preventDefault()
    setIsOepn(false)
  }

  const Menu = () => {
    if (!isOpen) return
    return (
      <ul className={styles.box}>
        {userEmail && <span className={styles.span}>{userEmail}</span>}
        {menu.map((v, i) => (
          <TextLink href={v.href} category={'profile'} key={i}>
            {v.label}
          </TextLink>
        ))}
      </ul>
    )
  }

  return (
    <div className={styles.wrapper}>
      <IconButton iconURL={iconURL} onClick={() => setIsOepn(!isOpen)}></IconButton>
      <Menu />
    </div>
  )
}

export default Dropdown
