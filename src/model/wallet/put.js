import prisma from "../../../prisma/prisma.js"

async function PUT({ author = '', urlId = '' }) {
    if (author && urlId) {
        try {
            const result = await prisma.wallet.upsert({
                where: { author },
                update: {
                    urlArray: {
                        push: urlId
                    }
                },
                create: {
                    urlArray: [urlId],
                    author
                }
            })
            return result
        } catch (error) {
            console.error(error)
        } finally {
            prisma.$disconnect()
        }
    } else {
        console.log("Require author and urlId")
    }
}

export default PUT