async function patch(req, res) {
    const body = req.body
    const { author, urlId } = body

    if (author) {
        // make operation by author id on wallet
        res.json({ author, urlId })
    } else {
        res.json({ message: "Require author" })
    }
}

export default patch