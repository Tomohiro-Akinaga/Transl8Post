import React, { PropsWithChildren } from 'react'
import styles from './index.module.css'
import Link from 'next/link'

interface Props {
  href: string
  icon?: 'pen' | ''
  category?: 'profile'
}

const TextLink = ({ href, icon, children, category }: PropsWithChildren<Props>) => {
  const classNames = () => {
    if (!icon) return [styles['link'], styles[`is-${category}`]].join(' ')
    return [styles['link'], styles['has-icon'], styles[`is-${icon}`]].join(' ')
  }

  return (
    <Link className={classNames()} href={href}>
      {children}
    </Link>
  )
}

export default TextLink
