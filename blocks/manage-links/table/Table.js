'use client'

import getURLsByAuthor from "@/actions/query/getURLsByAuthor";
import { useSession } from "next-auth/react";
import { Fragment, useEffect, useState } from "react";
import TableRow from "./TableRow";
import TableHeader from "./TableHead";
import TableContainer from "./TableContainer";
import deleteURLById from "@/actions/query/url/delete";
import Print from "@/components/Print";

const NoRecordsFound = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <p className="text-gray-800 text-lg">No records found.</p>
        </div>
    );
}

export { NoRecordsFound }

export default function ManageLinksTable() {
    const { data } = useSession()
    const [URLs, setURLs] = useState([])
    const isArray = Array.isArray(URLs) && URLs.length > 0

    async function getURLs() {
        if (data?.user) {
            const email = data.user?.email
            try {
                const res = await getURLsByAuthor({ author: email })
                console.log(res)
                if (res) {
                    setURLs(res)
                }
            } catch (error) {
                console.error(error)
            }
        } else {
            console.log(`Log in to manage links`)
        }
    }

    useEffect(() => {
        getURLs()
    }, [data])

    if (isArray) {
        return (
            <TableContainer>
                <TableHeader />
                <tbody className="divide-y">
                    {
                        URLs.map((_, i) => {
                            const redirectURL = `https://${_.domain}/${_.alias || _.hash}`
                            return (
                                <Fragment key={i}>
                                    <TableRow URL={_.URL} redirectURL={redirectURL} id={_.id}
                                        onDelete={() => {
                                            deleteURLById({ id: _.id }).then(() => {
                                                getURLs()
                                            })
                                        }}
                                        refetch={getURLs}
                                    />
                                </Fragment>
                            )
                        })
                    }
                </tbody>
            </TableContainer>
        )
    } else {
        return <NoRecordsFound />
    }
}
