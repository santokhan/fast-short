'use server'

import prisma from "@/prisma/prismaClient"

async function getURL(id = '') {
    if (!id) {
        console.error('Invalid parameters provided to checkAlias')
        return
    } else {
        try {
            const result = await prisma.urls.findFirst({
                where: { hash: id }
            })

            if (result) {
                return result;
            } else {
                const res = await prisma.urls.findFirst({
                    where: { alias: id }
                })

                return res
            }
        } catch (error) {
            console.error(error)
        } finally {
            prisma.$disconnect()
        }
    }
}

export default getURL