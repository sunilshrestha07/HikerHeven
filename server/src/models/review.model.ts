import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        rating:{
            type:Number,
            required:true
        },
        userId:{
            type:String,
            default:1
        },
        comment:{
            type:String,
            required:true
        },
        postId:{
            type:String,
            required:true
        }
    },{timestamps:true})

const Reviews = mongoose.model("Reviews",reviewSchema)
export default Reviews