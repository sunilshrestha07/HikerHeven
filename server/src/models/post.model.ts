import { Schema } from "mongoose";

const postSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{    
        type: String,
        required: true
    },
    photos:{
        type:String,
        required: true
    },
    level:{
        type:String,
        required: true
    },
    map:{
        type:String,
        required: true
    },
    rating:{
        type:Number,
        required: true}
},{timestamps: true});