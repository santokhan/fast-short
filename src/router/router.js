import express from 'express';
import RouterHash from './hash/all.js';
import RouterWallet from './wallet/all.js';
import RouterWithdrawal from './withdrawal/all.js';

const router = express.Router();

/**
 * @swagger
 * /hash:
 *   post:
 *     summary: Create a new hash
 */
router.post('/hash', RouterHash.post);

/**
 * @swagger
 * /hash:
 *   get:
 *     summary: Retrieve hashes
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         description: Hash Id
 */
router.get('/hash', RouterHash.get);

/**
 * @swagger
 * /hash:
 *   patch:
 *     summary: Update a hash
 */
router.patch('/hash', RouterHash.patch);

/**
 * @swagger
 * /hash:
 *   delete:
 *     summary: Delete a hash
 */
router.delete('/hash', RouterHash.delete);

/**
 * @swagger
 * /wallet:
 *   put:
 *     summary: Update wallet
 */
router.put('/wallet', RouterWallet.put);

/**
 * @swagger
 * /wallet:
 *   get:
 *     summary: Retrieve wallet
 */
router.get('/wallet', RouterWallet.get);

/**
 * @swagger
 * /wallet:
 *   patch:
 *     summary: Patch wallet
 */
router.patch('/wallet', RouterWallet.patch);

/**
 * @swagger
 * /withdrawal:
 *   post:
 *     summary: Create a new withdrawal request
 */
router.post('/withdrawal', RouterWithdrawal.post);

/**
 * @swagger
 * /withdrawal:
 *   get:
 *     summary: Retrieve withdrawal requests
 */
router.get('/withdrawal', RouterWithdrawal.get);

export default router;
