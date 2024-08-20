import React from 'react'
import Link from 'next/link'
import styles from './index.module.css'

const SiteLogo = () => {
  return (
    <Link className={styles.link} href={'/'}>
      TLANSL8POST
    </Link>
  )
}

export default SiteLogo
