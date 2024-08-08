import React, { ComponentPropsWithoutRef } from 'react'
import styles from './index.module.css'

interface Props extends Omit<ComponentPropsWithoutRef<'button'>, 'className'> {
  category: 'auth' | 'accept' | 'cancel'
  onClick?: () => void
}

export const TextButton = ({ children, category, onClick }: Props) => {
  const classNames = () => {
    return [styles['button'], styles[`is-${category}`]].join(' ')
  }

  return (
    <button className={classNames()} onClick={onClick}>
      {children}
    </button>
  )
}
