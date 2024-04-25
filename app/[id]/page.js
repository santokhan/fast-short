// Redirect page for the URL shortener

import { redirect } from "next/dist/server/api-utils"

const Redirect = () => {
    redirect('/dashboard')
    return (
        <></>
    )
}