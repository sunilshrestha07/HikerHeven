import  { NextFunction ,Request,Response} from "express";
import Post from "../models/post.model";
import { errorHandler } from "../utils/errorHandler.utils";

export const createPost = async (req:Request ,res:Response ,next:NextFunction) =>{
    try {
        //checking all the fields
        const { name ,district, description , image , level , map} = req.body;

        if(!name || !description || !image || !level || !map){
            return next (errorHandler(400,"all filed are required"))
        }

        //creating post 
        const newPost = new Post({
            name,
            description,
            image ,
            level,
            district,
            map
        })

        //saving new post
        await newPost.save()

        //sending new post
        res.status(200).json(newPost)
    } catch (error) {
        return next (errorHandler(500,(error as Error).message))
    }
}



//getting all post
export const getAllPost = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const allPost = await Post.find()
        res.status(200).json(allPost)
    } catch (error) {
        return next (errorHandler(500,(error as Error).message))
    }
}

//get specific post
export const getSpecificPost = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const postId = req.params.postId

        //serching the specific post
        const specifiPost = await Post.findById(postId)
        if(specifiPost){
            res.status(200).json(specifiPost)
        }else{
            return next (errorHandler(404,"could not find the post"))
        }
    } catch (error) {
        return next (errorHandler(404,(error as Error).message))
    }
}

//test
export const testPost = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        res.send('APi is working in conroller')
    } catch (error) {
        return next (errorHandler(404,(error as Error).message))
    }
}