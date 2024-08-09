import React, { ComponentPropsWithoutRef } from 'react'
import styles from './index.module.css'

interface Props extends Omit<ComponentPropsWithoutRef<'button'>, 'className'> {
  size: 'small' | 'large'
  category: 'auth' | 'accept' | 'cancel'
  onClick?: () => void
}

export const TextButton = ({ children, category, size, onClick }: Props) => {
  const classNames = () => {
    return [styles['button'], styles[`is-${category}`], styles[`is-${size}`]].join(' ')
  }

  return (
    <button className={classNames()} onClick={onClick}>
      {children}
    </button>
  )
}
