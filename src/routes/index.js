import express from 'express'

const router = express.Router()

/**
 * @swagger
 * /:
 *   get:
 *     summary: Returns an object include message
 *     description: Optional extended description in Markdown.
 *     responses:
 *       200:
 *         description: Message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/', (req, res) => {
    const message = "Welcome to the URL hash server"
    res.json({ message })
})

export default router