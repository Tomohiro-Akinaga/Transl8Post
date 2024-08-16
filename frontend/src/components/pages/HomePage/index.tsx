import React from 'react'
import { HomeTemplate } from '../../templates/HomeTemplate'
import { getSession } from '@auth0/nextjs-auth0'
import { UserProvider } from '../../../context/UserContextProvider'

export const HomePage = async () => {
  const session = await getSession()
  const user = session?.user

  return (
    <UserProvider value={user}>
      <HomeTemplate />
    </UserProvider>
  )
}

export default HomePage
