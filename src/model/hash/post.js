import prisma from "../../../prisma/prisma.js"

// Create a URL instance
// With Alias & Hash
async function post({ url = '', domain = '', alias = '', author = '' }) {
    if (!url) {
        console.error('Invalid URL provided. ')
    } else if (!domain) {
        console.error('Invalid domain provided. ')
    } else {
        try {
            const result = await prisma.urls.create({
                data: {
                    URL: url, /** URL on mongodb */
                    domain,
                    alias,
                    author,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            })
            return result
        } catch (error) {
            console.error(error)
        } finally {
            prisma.$disconnect()
        }
    }
}

export default post