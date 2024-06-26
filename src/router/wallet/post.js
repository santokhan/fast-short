async function post(req, res) {
    const body = req.body;
    const { author, urlId } = body

    if (author) {
        if (urlId) {
            res.json(body)
        } else {
            res.json({ message: "Id is empty" })
        }
    } else {
        res.json({ message: "Author is empty" })
    }
}

export default post