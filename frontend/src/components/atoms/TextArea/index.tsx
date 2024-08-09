import React, { ComponentPropsWithoutRef } from 'react'
import styles from './index.module.css'

interface Props extends ComponentPropsWithoutRef<'textarea'> {
  size: 'small' | 'large'
}

export const TextArea = ({ size, placeholder, onChange, value, readOnly, children }: Props) => {
  const classNames = [styles['textarea'], styles[`is-${size}`]].join(' ')

  return (
    <textarea className={classNames} placeholder={placeholder} onChange={onChange} value={value} readOnly={readOnly}>
      {children}
    </textarea>
  )
}

export default TextArea
