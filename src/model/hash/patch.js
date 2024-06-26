import prisma from "../../../prisma/prisma.js"

async function patch({ id = '', visited = false }) {
    if (id) {
        const data = {}
        if (visited) data.visited = visited;

        try {
            const result = await prisma.urls.update({
                where: {
                    id
                },
                data
            })

            return result
        } catch (error) {
            console.error(error)
        } finally {
            prisma.$disconnect()
        }
    } else {
        return {
            message: 'Require id'
        }
    }
}

export default patch;