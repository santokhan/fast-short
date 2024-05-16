'use client';

import SideNavs from "@/blocks/dashboard/sidebar/SideNavs";
import Logo from "@/components/Logo";
import NavBar from "@/components/navbar/NavBar";
import AuthProvider from "@/context/AuthContext";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { twMerge } from "tailwind-merge";

const PrivatePages = ({ children }) => {
  const { status, data, update, error } = useSession()

  if (status === 'loading') {
    return (
      <div className="fixed left-0 top-0 inset-0 h-screen w-full flex flex-col items-center justify-center gap-2">
        <Logo />
        <p>Authenticating...</p>
      </div>
    )
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
