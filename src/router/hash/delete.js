import ModelHash from '../../model/hash/all.js'

async function del(req, res) {
    const { id } = req.query
    
    if (id) {
        const result = await ModelHash.delete(id)
        res.json(result)
    }
}

export default del