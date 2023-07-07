import express, { Router, Request, Response } from "express";
import db from "../util/db";
import { createPost } from "../controllers/posts";
const router: Router = express.Router();

router.post('/posttweet', async (req: Request, res: Response) => {
    let {authorId, text} = req.body
    if (!text || text.length === 0) return {error: true, errorMsg: 'You have to input some text before you make a post.'}

    let post = createPost(authorId, text)
    res.status(200).send({message: 'Post created!'})
    console.log('send!')
})

router.get('/:id', (req: Request, res: Response) => {

})

export default router;