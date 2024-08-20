import React, { PropsWithChildren } from 'react'
import styles from './index.module.css'
import { TextButton } from '@/components/atoms/TextButton'

interface Props {
  accept: string
  cancel: string
  onAccept: () => void
  onCancel: () => void
}

const Modal = ({ children, accept, cancel, onAccept, onCancel }: PropsWithChildren<Props>) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        {children}
        <div className={styles.buttonArea}>
          <TextButton category='accept' size='small' onClick={onAccept}>
            {accept}
          </TextButton>
          <TextButton category='cancel' size='small' onClick={onCancel}>
            {cancel}
          </TextButton>
        </div>
      </div>
    </div>
  )
}

export default Modal
