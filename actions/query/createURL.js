'use server'

import prisma from "@/prisma/prismaClient"

// Create a URL instance
// With Alias & Hash
async function createURL({ url = '', domain = '', hash = '', alias = '', author = '' }) {
    if (!url) {
        console.error('Invalid URL provided. ', __filename)
    } else if (!domain) {
        console.error('Invalid domain provided. ', __filename)
    } {
        try {
            const result = await prisma.urls.create({
                data: {
                    URL: url, /** URL on mongodb */
                    domain,
                    hash,
                    alias,
                    author
                }
            })
            return result
        } catch (error) {
            console.error(error)
        } finally {
            prisma.$disconnect()
        }
    }
}

export default createURL