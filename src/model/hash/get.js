import prisma from "../../../prisma/prisma.js";

async function getAll() {
    try {
        const count = await prisma.urls.count()
        const result = await prisma.urls.findMany()

        return {
            count,
            result
        };
    } catch (error) {
        console.error(error)
    } finally {
        prisma.$disconnect()
    }
}

async function get({ hash = '', alias = '', url = '', id = '', author = '', visited = '' }) {
    if (hash || alias || id) {
        const query = {}
        if (id) query.id = id;
        if (hash) query.hash = hash;
        if (alias) query.alias = alias;

        try {
            const result = await prisma.urls.findFirst({
                where: query
            })
            return result;
        } catch (error) {
            console.error(error)
        } finally {
            prisma.$disconnect()
        }
    } else if (url || author || visited) {
        const query = {}
        if (url) query.URL = url;
        if (author) query.author = author;

        try {
            const result = await prisma.urls.findMany({
                where: query
            })
            return result;
        } catch (error) {
            console.error(error)
            return {
                message: error.message
            }
        } finally {
            prisma.$disconnect()
        }
    } else {
        return getAll();
    }
}

export default get