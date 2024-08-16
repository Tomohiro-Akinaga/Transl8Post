'use client'

import { createContext, PropsWithChildren } from 'react'

interface Props {
  value: any
}

export const UserContext = createContext('')

export const UserProvider = ({ children, value }: PropsWithChildren<Props>) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
