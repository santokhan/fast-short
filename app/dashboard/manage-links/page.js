'use client'

import getURLsByAuthor from "@/actions/query/getURLsByAuthor";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { data } = useSession()
  const [URLs, setURLs] = useState([])

  useEffect(() => {
    async function getURLs(author = '') {
      if (typeof author === 'string') {
        try {
          const res = await getURLsByAuthor({ author })
          console.log(res)
          if (res) {
            setURLs(res)
          }
        } catch (error) {
          console.error(error)
        }
      }
    }

    if (data?.user) {
      const email = data.user?.email
      getURLs(email)
    }
  }, [data])

  const TH = ({ children, ...rest }) => <th className="capitalize text-start px-4" {...rest}>{children}</th>

  if (Array.isArray(URLs) && URLs.length > 0) {
    return (
      <div>
        <h2 class="text-2xl font-semibold">Manage Links</h2>
        <div className="overflow-x-auto bg-white rounded-lg p-4 mt-4">
          <table className="w-full">
            <thead>
              <tr>
                <TH width={280}>URL</TH>
                <TH width={280}>domain + (hash | alias)</TH>
                <TH width={100}>Action</TH>
              </tr>
            </thead>
            <tbody className="divide-y">
              {
                URLs.map((_, i) => {
                  const redirectURL = `https://${_.domain}/${_.hash || _.alias}`
                  return (
                    <tr key={i}>
                      <td className="px-4 py-2 whitespace-nowrap overflow-hidden" width={375}>
                        <Link href={_.URL} target="_blank" className="hover:underline">{_.URL.slice(0, 50)}</Link>
                      </td>
                      <td className="px-4 py-2">
                        <Link href={redirectURL} target="_blank" className="hover:underline">{redirectURL}</Link>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
