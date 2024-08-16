import React, { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import styles from './index.module.css'

interface Props extends ComponentPropsWithoutRef<'button'> {
  iconURL: string
}

const IconButton = ({ iconURL, onClick, children }: PropsWithChildren<Props>) => {
  return (
    <button className={[styles.button, styles['has-icon']].join(' ')} onClick={onClick}>
      <img src={iconURL} className={styles.icon} />
      {children}
    </button>
  )
}

export default IconButton
