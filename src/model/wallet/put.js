import prisma from "../../../prisma/prisma.js"

async function PUT({ author = '', urlId = '' }) {
    if (author && urlId) {
        try {
            const wallet = await prisma.wallet.findUnique({
                where: {
                    author
                }
            })

            if (wallet) {
                if (wallet.urlArray.includes(urlId)) {
                    console.log("Id already exists in wallet")
                    return wallet;
                } else {
                    const result = await prisma.wallet.update({
                        where: { author },
                        data: {
                            urlArray: {
                                push: urlId
                            }
                        }
                    })
                    return result
                }
            } else {
                const result = await prisma.wallet.create({
                    data: {
                        urlArray: [urlId],
                        author
                    }
                })
                return result
            }
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