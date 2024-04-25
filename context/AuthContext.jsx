// It require client component
// That's why I have moved it to external component
// Then I've wrapped all with AuthProvider
'use client'

import { SessionProvider } from 'next-auth/react'

const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider
