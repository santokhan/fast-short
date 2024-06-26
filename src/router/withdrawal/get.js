import ModelWithdrawal from "../../model/withdrawal/all.js"

async function get(req, res) {
    const { author } = req.query

    if (author) {
        const result = await ModelWithdrawal.get({ author })
        res.json({ result })
    } else {
        const message = "Require author in query"
        res.json({ message })
    }
}

export default get