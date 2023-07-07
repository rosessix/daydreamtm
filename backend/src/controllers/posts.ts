import { User } from "../models/user";
import db from "../util/db";
import { getUserFromId } from "./users";
import {v4 as generateUid} from 'uuid'

export const createPost = async (authorId: String, text: String) => {
    if (!authorId) throw new Error('createPost authorId must be a valid string.')
    if (!text) throw new Error('createPost text, must have a valid text form, and has to be a string.')

    let con = await db.getConnection();
    let randomId = generateUid();
    let postId = `${authorId}-${randomId}`
    let data = await con.execute('INSERT INTO posts (id, authorId, text) VALUES (?, ? ,?)', [postId, authorId, text])
    if (!data) return {error: true, errorMsg: 'An error occured. Please try again.'}
    return data
}

export const getPostFromId = async (postId: string) => {
    const NO_POST_FOUND = `The given postId (${postId}) did not give a post back from the database. Please contact a developer if this issue persists.`
    let con = await db.getConnection();
    let data: any = await con.execute('SELECT * FROM posts WHERE id = ?', [postId])
    let post = data[0][0]
    
    if (!post) return console.log(NO_POST_FOUND)
    return post
}

export const fetchPost = async (authorId: String, postId: string) => {
    const NO_USER_FOUND = `Could not find any user with given authorId (${authorId})`
    const NO_POST_FOUND = `The given postId (${postId}) did not give a post back from the database. Please contact a developer if this issue persists.`
    
    if (!authorId) throw new Error('fetchPost authorId must be a valid string.')
    let user = await getUserFromId(authorId)
    if (!user) return {error: true, erorrMsg: NO_USER_FOUND}
    
    let post = await getPostFromId(postId) 
    if (!post) return {error: true, NO_POST_FOUND}

    return post
}