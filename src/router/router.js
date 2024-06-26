import express from 'express'
import RouterHash from './hash/all.js'
import RouterWallet from './wallet/all.js'
import RouterWithdrawal from './withdrawal/all.js'

const router = express.Router()

router.get('/', (req, res) => {
    const message = "Welcome to the URL hash server"
    res.json({ message })
})

router.post('/hash', RouterHash.post)
router.get('/hash', RouterHash.get)
router.patch('/hash', RouterHash.patch)
router.delete('/hash', RouterHash.delete)

router.put('/wallet', RouterWallet.put)
router.get('/wallet', RouterWallet.get)
router.patch('/wallet', RouterWallet.patch)

router.post('/withdrawal', RouterWithdrawal.post)
router.get('/withdrawal', RouterWithdrawal.get)

export default router;