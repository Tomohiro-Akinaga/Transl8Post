'use client'

import React, { Component, ComponentPropsWithoutRef, PropsWithChildren, useRef } from 'react'
import styles from './index.module.css'

interface Props extends ComponentPropsWithoutRef<'input'> {
  inputValue: string
  setInputValue: (value: string) => void
  label?: string
}

const InputArea = ({ children, type, label, inputValue, setInputValue }: PropsWithChildren<Props>) => {
  const ref = useRef<HTMLInputElement>(null)

  const handleChange = () => setInputValue(ref.current?.value!)
  return (
    <label className={styles.label}>
      {label}
      <input type={type} accept='image/*' className={styles.input} ref={ref} onChange={handleChange} />
      {type === 'text' && <span className={styles.span}>円</span>}
    </label>
  )
}

export default InputArea
