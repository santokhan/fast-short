'use server'

import prisma from "@/prisma/prismaClient"

/**
 * Create a URL instance with hash
 * 
 * @param {*} domain 
 * @param {*} hash 
 * @returns 
 */
async function storeURLHash(URL, domain, hash, author = '') {
    if (!domain || !hash || !URL) {
        console.error('Invalid parameters provided to checkAlias')
        return
    } else {
        try {
            const result = await prisma.urls.create({
                data: {
                    URL,
                    domain,
                    hash,
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

    console.log(domain, hash)
}

export default storeURLHash