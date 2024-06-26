async function get(req, res) {
    const { author } = req.query

    if (author) {
        res.json({ author })
    } else {
        const message = "Require author in query"
        res.json({ message })
    }
}

export default get