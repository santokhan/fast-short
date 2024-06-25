import prisma from "../../../prisma/prisma.js"

async function del(id) {
    try {
        const query = {
            where: {
                id
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

export default del