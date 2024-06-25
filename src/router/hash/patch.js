import ModelHash from '../../model/hash/all.js'

async function update(req, res) {
    const { id } = req.query
    const body = req.body

    if (id) {
        const result =await ModelHash.patch({ id, ...body })
        res.json(result)
    } else {
        const message = "Require id"
        res.json({ message })
    }
}

export default update