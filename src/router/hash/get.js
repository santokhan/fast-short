import ModelHash from "../../model/hash/all.js"

async function get(req, res) {
    const { hash, alias, url, id, author, visited } = req.query

    if (hash || alias || url || id || author || visited) {
        const result = await ModelHash.get({ hash, alias, url, id, author, visited })
        res.json(result)
    }
}

export default get