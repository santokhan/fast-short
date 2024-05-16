'use client'

import Section from "@/components/Section";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { status, data, update, error } = useSession()

  if (data && data.user) {
    const user = data.user
    return (
      <>
        <Section>
          <div className="space-y-2">
            <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold'>Hi <span className="text-button">{user && user.name}</span>,</h1>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold'>Welcome to the dashboard</h1>
          </div>
        </Section>
      </>
    );
  }
}
