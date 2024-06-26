import prisma from "../../../prisma/prisma.js";

async function get({ author }) {
    if (author) {
        try {
            if (author === "*") {
                const result = await prisma.wallet.findMany()
                return {
                    count: result.length,
                    result
                };
            } else {
                const result = await prisma.wallet.findFirst({
                    where: { author }
                })
                return result;
            }
        } catch (error) {
            console.error(error)
        } finally {
            prisma.$disconnect()
        }
    } else {
        console.log("Require author")
    }
}

export default get