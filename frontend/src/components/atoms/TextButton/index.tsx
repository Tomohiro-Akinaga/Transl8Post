import React, { ComponentPropsWithoutRef } from 'react'
import styles from './index.module.css'

interface Props extends Omit<ComponentPropsWithoutRef<'button'>, 'className'> {
  category: 'auth' | 'tab'
  icon?: 'pen' | ''
  onClick?: () => void
}

export const TextButton = ({ children, category, icon, onClick }: Props) => {
  return (
    <button className={[styles['button'], styles[`is-${category}`], styles[`is-${icon}`]].join(' ')} onClick={onClick}>
      {children}
    </button>
  )
}
