import express from 'express';
import RouterHash from './hash/all.js';
import RouterWallet from './wallet/all.js';
import RouterWithdrawal from './withdrawal/all.js';

const router = express.Router();


/**
 * @swagger
 * /hash:
 *   post:
 *     tags: 
 *       - hash
 *     summary: Retrieve hashes
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         description: Hash Id
 *     responses:
 *       200:
 *         description: Message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.post('/hash', RouterHash.post);

/**
 * @swagger
 * /hash:
 *   get:
 *     tags:
 *       - hash
 *     summary: Retrieve hashes
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         description: Hash Id
 *     responses:
 *       200:
 *         description: Message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/hash', RouterHash.get);

/**
 * @swagger
 * /hash:
 *   patch:
 *     tags:
 *       - hash
 *     summary: Retrieve hashes
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         description: Hash Id
 *     responses:
 *       200:
 *         description: Message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.patch('/hash', RouterHash.patch);

/**
 * @swagger
 * /hash:
 *   delete:
 *     tags:
 *       - hash
 *     summary: Retrieve hashes
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         description: Hash Id
 *     responses:
 *       200:
 *         description: Message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.delete('/hash', RouterHash.delete);

/**
 * @swagger
 * /wallet:
 *     tags:
 *       - wallet
 *   put:
 *     summary: Retrieve hashes
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         description: Hash Id
 *     responses:
 *       200:
 *         description: Message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.put('/wallet', RouterWallet.put);

/**
 * @swagger
 * /wallet:
 *     tags:
 *       - wallet
 *   get:
 *     summary: Retrieve hashes
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         description: Hash Id
 *     responses:
 *       200:
 *         description: Message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/wallet', RouterWallet.get);

/**
 * @swagger
 * /wallet:
 *   patch:
 *     tags:
 *       - wallet
 *     summary: Retrieve hashes
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         description: Hash Id
 *     responses:
 *       200:
 *         description: Message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.patch('/wallet', RouterWallet.patch);

/**
 * @swagger
 * /withdrawal:
 *   post:
 *     tags:
 *       - withdrawal
 *     summary: Retrieve hashes
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         description: Hash Id
 *     responses:
 *       200:
 *         description: Message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.post('/withdrawal', RouterWithdrawal.post);

/**
 * @swagger
 * /withdrawal:
 *   get:
 *     tags:
 *       - withdrawal
 *     summary: Retrieve hashes
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         description: Hash Id
 *     responses:
 *       200:
 *         description: Message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/withdrawal', RouterWithdrawal.get);

export default router;
