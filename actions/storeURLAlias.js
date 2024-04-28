'use server'

import prisma from "@/prisma/prismaClient"

/**
 * Create a URL instance with Alias
 * 
 * @param {*} domain 
 * @param {*} alias 
 * @returns 
 */
async function storeURLAlias(URL, domain, alias, author = '') {
    if (!domain || !alias || !URL) {
        console.error('Invalid parameters provided to checkAlias')
        return
    } else {
        try {
            const result = await prisma.urls.create({
                data: {
                    URL,
                    domain,
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

    console.log(domain, alias)
}

export default storeURLAlias