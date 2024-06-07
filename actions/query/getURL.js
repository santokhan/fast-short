'use server'

import prisma from "@/prisma/prismaClient"

async function getURL(hash = '') {
    if (!hash) {
        console.error('Invalid parameters provided to checkAlias')
        return
    } else {
        try {
            const result = await prisma.urls.findFirst({
                where: { hash: hash }
            })

            if (result) {
                return result;
            } else {
                const res = await prisma.urls.findFirst({
                    where: { alias: hash }
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