import React from 'react'
import TextLink from '@/components/atoms/TextLink'

const HeaderActionArea = () => {
  return (
    <div>
      <TextLink href='/edit' icon={'pen'}>
        投稿
      </TextLink>
      <a href='/api/auth/login'>Login</a>
      <a href='/api/auth/logout'>Logout</a>
    </div>
  )
}

export default HeaderActionArea
