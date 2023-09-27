/**
 * @swagger
 * /items:
 *   get:
 *     summary: Get a list of items
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: No items found
 */
import express, { Request, Response } from 'express';

const router = express.Router();

const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

router.get('/', (req: Request, res: Response) => {
  res.status(200).json(items);
});

export default router;
