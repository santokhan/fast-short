'use server'

import prisma from "@/prisma/prismaClient"

/**
 * Check existance of alias
 * 
 * @param {*} domain 
 * @param {*} alias 
 * @returns 
 */
async function getURL(id='') {
    if (!id) {
        console.error('Invalid parameters provided to checkAlias')
        return
    } else {
        try {
            const result = await prisma.urls.findFirst({
                where: {
                    OR: [
                        { hash: id },
                        { alias: id }
                    ]
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

export default getURL