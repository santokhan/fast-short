import ModelHash from '../../model/hash/all.js'
import ModelWallet from '../../model/wallet/all.js'

async function update(req, res) {
    const { id } = req.query
    const body = req.body

    if (id) {
        if (body.author || body.visited || body.url || body.domain) {
            ModelHash.patch({ id, ...body }).then(result => {
                if (result.visited == true) {
                    if (result.id && result.author) {
                        ModelWallet.put({
                            author: result.author,
                            urlId: result.id
                        }).then(wallet => {
                            console.log("Id added to wallet", wallet)
                            res.json(result)
                        }).catch(err => {
                            console.log(err)
                            res.json(result)
                        })
                    } else {
                        console.log("Undefined author and urlId")
                        res.json(result)
                    }
                } else {
                    console.log("Wallet not updated")
                    res.json(result)
                }
            })
        } else {
            res.status(400).json({ message: "Require body" })
        }
    } else {
        const message = "Require id"
        res.status(400).json({ message })
    }
}

export default update