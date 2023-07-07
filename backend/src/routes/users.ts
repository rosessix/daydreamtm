import express, { Router, Request, Response } from "express";
import { createUser, loginUser } from "../controllers/users";
import db from '../util/db';

const router: Router = express.Router();

router.post('/createuser', async (req: Request, res: Response) => {
    let {email, password, username} = req.body;
    
    let created = await createUser(email, username, password, req)

    res.status(200).send(created)
})

router.get('/:id', (req: Request, res: Response) => {
    console.log(req.body)
})

router.post('/loginuser', async (req: Request, res: Response) => {
    let {email, password} = req.body

    let login = await loginUser(email, password, req)
    
    res.status(200).send(login)
})

export default router;