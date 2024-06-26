import ModelWallet from "../../model/wallet/all.js"

async function get(req, res) {
    const { author } = req.query;

    if (author) {
        const result = await ModelWallet.get({ author })
        if (result) {
            res.json(result)
        } else {
            res.json({ message: "Not found" })
        }
    } else {
        const message = "Require author in query"
        res.json({ message })
    }
}

export default get