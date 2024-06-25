import ModelHash from "../../model/hash/all.js"

async function get(req, res) {
    const result = await ModelHash.get(req.query)
    res.json(result)
}

export default get