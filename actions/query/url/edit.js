'use server'

import prisma from "@/prisma/prismaClient"

async function editURL({ id = '', URL = '' }) {
    if (typeof id === 'string' && id.length > 0) {
        try {
            const query = {
                where: {
                    id
                },
                data: {
                    URL
                }
            }
            const result = await prisma.urls.update(query)
            return result
        } catch (error) {
            console.error(error)
        } finally {
            prisma.$disconnect()
        }
    }
}

export default editURL