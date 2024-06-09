'use server'

async function doVisitURL({ id = '' }) {
    if (typeof id === 'string' && id.length > 0) {
        try {
            const query = {
                where: {
                    id: id
                },
                data: {
                    visited: true
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

export default doVisitURL;