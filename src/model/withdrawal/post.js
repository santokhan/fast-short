import prisma from "../../../prisma/prisma.js"

async function post({ author, urlId: urlArray }) {
    if (author && urlArray) {
        try {
            const result = await prisma.wallet.create({
                data: {
                    urlArray: [urlArray],
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

export default post