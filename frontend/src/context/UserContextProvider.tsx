'use client'

import { createContext, PropsWithChildren } from 'react'

interface Props {
  value: any
}

export type UserContextType = {
  email: string
  email_verified: boolean
  name: string
  nickname: string
  picture: string
  sid: string
  sub: string
  updated_at: string
}

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = ({ children, value }: PropsWithChildren<Props>) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
