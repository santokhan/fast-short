import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import router from './src/router/router.js'
import index from './src/routes/index.js'
import corsOptions from './src/utils/allowDomain.js'
import swaggerUi from 'swagger-ui-express'
import specs from './src/swagger/swagger.js'

dotenv.config()

const PORT = process.env.PORT || 3000;

express()
    .use(cors())
    .use(express.json())
    .use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
    .use(router)
    .use(index)
    .listen(PORT, () => {
        console.log(`Running on port http://localhost:${PORT}`)
    })