import { createPost, getAllPost, getSpecificPost, testPost } from "../controllers/post.controllers";
import express from "express";

const router = express.Router()
router.post('/post/makepost',createPost)
router.get('/post/getallpost',getAllPost)
router.get('/post/:postId',getSpecificPost)
router.get('/test',testPost)

export default router