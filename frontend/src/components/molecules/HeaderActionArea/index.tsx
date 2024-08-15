'use client'

import React from 'react'
import TextLink from '@/components/atoms/TextLink'
import { useUser } from '@auth0/nextjs-auth0/client'

const HeaderActionArea = () => {
  const { user } = useUser()
  console.log(user)
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
