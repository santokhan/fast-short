'use client';

import Section from "@/components/Section";
import AuthProvider from "@/context/AuthContext";
import { useSession } from 'next-auth/react'

export default function RootLayoutPrivate({ children }) {
  const { status, data, update, error } = useSession()

  if (status === 'loading') {
    return <Section>Authenticating...</Section>
  } else {
    if (data && data.user) {
      return children
    } else {
      redirect('/auth/signin')
    }
  }

}
