import express from 'express'
import RouterHash from './hash/all.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.json("Welcome to hash server")
})

// /hash routes
router.post('/hash', RouterHash.post)
router.get('/hash', RouterHash.get)
router.patch('/hash', RouterHash.patch)
router.delete('/hash', RouterHash.delete)

export default router;