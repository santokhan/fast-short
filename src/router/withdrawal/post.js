import ModelWithdrawal from "../../model/withdrawal/all.js"

async function post(req, res) {
    const body = req.body
    const { author, urlArray } = body
    
    if (author) {
        if (urlArray) {
            const result = await ModelWithdrawal.post({ author, urlArray })
            res.json(result)
        } else {
            res.json({ message: "Require urlArray" })
        }
    } else {
        res.json({ message: "Require author" })
    }
}

export default post