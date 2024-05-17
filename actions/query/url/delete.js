'use server'

import prisma from "@/prisma/prismaClient"

async function deleteURLById({ id = '' }) {
    if (typeof id === 'string' && id.length > 0) {
        try {
            const query = {
                where: {
                    id: id
                }
            }
            const result = await prisma.urls.delete(query)
            return result
        } catch (error) {
            console.error(error)
        } finally {
            prisma.$disconnect()
        }
    }
}

export default deleteURLById