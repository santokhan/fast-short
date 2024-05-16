'use server'

import prisma from "@/prisma/prismaClient"

async function getURLsByAuthor({ author = '' }) {
    if (typeof author === 'string' && author.length > 0) {
        try {
            const query = {
                where: {
                    author: author
                }
            }
            const result = await prisma.urls.findMany(query)
            return result
        } catch (error) {
            console.error(error)
        } finally {
            prisma.$disconnect()
        }
    }
}

export default getURLsByAuthor