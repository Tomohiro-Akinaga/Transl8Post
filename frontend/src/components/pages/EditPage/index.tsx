import React from 'react'
import { EditTemplate } from '@/components/templates/EditTemplate'
import { getSession } from '@auth0/nextjs-auth0'
import { UserProvider } from '../../../context/UserContextProvider'

export const EditPage = async () => {
  const session = await getSession()
  const user = session?.user

  return (
    <UserProvider value={user}>
      <EditTemplate />
    </UserProvider>
  )
}

export default EditPage
