import ModelWallet from "../../model/wallet/all.js";

async function PUT(req, res) {
    const body = req.body;
    const { author, urlId } = body

    if (author) {
        if (urlId) {
            const result = await ModelWallet.put({ author, urlId })
            res.json(result)
        } else {
            res.json({ message: "Id is empty" })
        }
    } else {
        res.json({ message: "Author is empty" })
    }
}

export default PUT