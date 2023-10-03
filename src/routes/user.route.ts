import express, { Request, Response } from 'express';
import User from '../models/User.model'

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        console.log("TEST", req.body);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Failed to create user" });
    }
});

export default router;

