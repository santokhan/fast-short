'use client';

import SideNavs from "@/blocks/dashboard/sidebar/SideNavs";
import NavBar from "@/components/navbar/NavBar";
import AuthProvider from "@/context/AuthContext";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { twMerge } from "tailwind-merge";

const PrivatePages = ({ children }) => {
  const { status, data, update, error } = useSession()

  if (status === 'loading') {
    return 'Authenticating'
  } else if (status === 'authenticated') {
    return (
      <>
        <aside className="hidden lg:block basis-64 bg-white rounded-xl">
          <SideNavs />
        </aside>
        <div className="p-4 lg:p-8 basis-96 flex-grow">
          {children}
        </div>
      </>
    )
  } else {
    redirect('/auth/signin')
  }
}

export default function Layout({ children }) {
  return (
    <AuthProvider>
      <NavBar fluid={true} />
      <main className={twMerge("min-h-screen pt-16", 'flex')}>
        <PrivatePages>{children}</PrivatePages>
      </main>
    </AuthProvider>
  );
}
