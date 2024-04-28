'use server'

import prisma from "@/prisma/prismaClient"

/**
 * Check existance of alias
 * 
 * @param {*} domain 
 * @param {*} alias 
 * @returns 
 */
async function checkAlias(domain, alias) {
    if (!domain || !alias) {
        console.error('Invalid parameters provided to checkAlias')
        return
    } else {
        try {
            const result = await prisma.urls.findFirst({
                where: {
                    domain,
                    alias
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

export default checkAlias