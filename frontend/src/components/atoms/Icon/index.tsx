import React, { PropsWithChildren } from 'react'
import styles from './index.module.css'

interface Props {
  icon: 'loading'
}
const Icon = ({ icon, children }: PropsWithChildren<Props>) => {
  const className = [styles.span, styles['has-icon'], styles[`is-${icon}`]].join(' ')

  return <span className={className}>{children}</span>
}

export default Icon
