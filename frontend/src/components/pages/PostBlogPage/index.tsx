import React from 'react'
import { PostBlogTemplate } from '@/components/templates/PostBlogTemplate/index'
import { getSession } from '@auth0/nextjs-auth0'
import { UserProvider } from '../../../context/UserContextProvider'

export const PostBlogPage = async () => {
  const session = await getSession()
  const user = session?.user

  return (
    <UserProvider value={user}>
      <PostBlogTemplate />
    </UserProvider>
  )
}

export default PostBlogPage
