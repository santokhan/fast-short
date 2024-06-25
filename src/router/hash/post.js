import ModelHash from "../../model/hash/all.js"

async function post(req, res) {
    const body = req.body;
    const { url, domain, alias, author } = body

    if (url && domain) {
        const props = { url, domain }
        if (alias) props.alias = alias
        if (author) props.author = author

        const result = await ModelHash.post(props)
        res.json(result)
    } else {
        res.json("Post body is empty")
    }
}

export default post