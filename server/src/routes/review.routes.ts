import { getallreviews, getspecificreview, postReview } from "../controllers/review.controllers";
import express from "express";

const router = express.Router()

router.post('/review/postreview',postReview)
router.get('/review/allreviews',getallreviews)
router.get('/review/:postId',getspecificreview)

export default router