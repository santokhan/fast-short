import express from 'express'
import RouterHash from './hash/all.js'
import RouterWallet from './wallet/all.js'
import RouterWithdrawal from './withdrawal/all.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.json("Welcome to hash server")
})

router.post('/hash', RouterHash.post)
router.get('/hash', RouterHash.get)
router.patch('/hash', RouterHash.patch)
router.delete('/hash', RouterHash.delete)

router.post('/wallet', RouterWallet.post)
router.put('/wallet', RouterWallet.put)
router.get('/wallet', RouterWallet.get)
router.patch('/wallet', RouterWallet.patch)
// router.delete('/wallet', RouterWallet.delete)

router.post('/withdrawal', RouterWithdrawal.post)
router.get('/withdrawal', RouterWithdrawal.get)
// router.patch('/withdrawal', RouterWithdrawal.patch)
// router.delete('/withdrawal', RouterWithdrawal.delete)

export default router;