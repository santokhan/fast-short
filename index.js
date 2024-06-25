import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import router from './src/router/router.js'
import corsOptions from './src/utils/allowDomain.js'

dotenv.config()

const PORT = process.env.PORT || 3000;

express()
    .use(cors())
    .use(express.json())
    .use(router)
    .listen(PORT, () => {
        console.log(`Running on port http://localhost:${PORT}`)
    })