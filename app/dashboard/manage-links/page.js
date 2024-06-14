'use client'

import ManageLinksTable from "@/blocks/manage-links/table/Table";
import UrlShorterForm from "@/components/form/URLShorter";
import AuthProvider from "@/context/AuthContext";

export default function Dashboard() {
  return (
    <>
      <AuthProvider>
        <UrlShorterForm />
      </AuthProvider>
      <ManageLinksTable />
    </>
  )
}
