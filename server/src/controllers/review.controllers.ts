import { NextFunction,Response,Request } from "express";
import Reviews from "../models/review.model";
import { errorHandler } from "../utils/errorHandler.utils";

export const postReview = async (req:Request ,res:Response ,next:NextFunction) =>{
    try {
        const {userId}=req.params
        const {rating, comment, postId}=req.body

        if(!comment || !postId){
            return next (errorHandler(400,"All fields are required"))
        }

        const newReview = new Reviews({
            rating,
            userId,
            comment,
            postId
        })

        await newReview.save()
        res.status(200).json(newReview)
    } catch (error) {
        return next (errorHandler(500,(error as Error).message))
    }
}

//get review
export const getallreviews = async (req:Request ,res:Response ,next:NextFunction) =>{
    try {
        const reviews = await Reviews.find()
        res.status(200).json(reviews)
    } catch (error) {
        return next (errorHandler(500,(error as Error).message))
    }
}  

//get specific post review
export const getspecificreview = async (req:Request ,res:Response ,next:NextFunction) =>{
    try {
        const {postId} = req.body
        const reviews = await Reviews.findOne({postId})
        res.status(200).json(reviews)
    } catch (error) {
        return next (errorHandler(500,(error as Error).message))
    }
}  