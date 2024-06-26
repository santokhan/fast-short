async function del(req, res) {
    const { id } = req.query
    
    if (id) {
        res.json({ id })
    } else {
        res.json({ message: "Require id" })
    }
}

export default del