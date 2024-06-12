import { NextFunction,Response,Request } from "express";
import User from "../models/user.model";
import { errorHandler } from "../utils/errorHandler.utils";
import bcryptjs from 'bcryptjs'
import jwt  from "jsonwebtoken";
import config from "../config/config";

export const signup = async (req:Request ,res:Response ,next:NextFunction) =>{
    try {
        //chech if all info are filled
        const {name , email , password} = req.body
        if(!name || !email || !password){
            return next (errorHandler(400,"All fields are required"))
        }

        //hashing password
        const hashedPassword = bcryptjs.hashSync(password,10)

        // creating new user
        const newUser = new User({
            name,
            email,
            password : hashedPassword
        })

        //saving newUser
        await newUser.save()

        //returning user
        res.status(200).json(newUser)
    } catch (error) {
        return next (errorHandler(500,(error as Error).message))
    }
}


export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Getting email and password from request body
        const { email, password } = req.body;

        // Check if both email and password are provided
        if (!email || !password) {
            return next(errorHandler(400, "All fields are required"));
        }

        // Validate if the user exists in the database
        const validUser = await User.findOne({ email });

        // If email is not found in the database
        if (!validUser) {
            return next(errorHandler(404, "User not found"));
        }

        // Validate password
        const validPassword = bcryptjs.compareSync(password, validUser.password);

        // If password doesn't match
        if (!validPassword) {
            return next(errorHandler(401, "Incorrect password"));
        }

        // Destructure to exclude password from the response
        const { password: pass, ...rest } = validUser.toObject();

        // Generate JWT token
        const token = jwt.sign({ id: validUser._id }, config.JWT_SECRET, { expiresIn: '24h' });

        // Set token as a cookie
        res.status(200).cookie('access_token', token, {
            httpOnly: true,
        }).json(rest);
    } catch (error) {
        return next(errorHandler(500, (error as Error).message));
    }
};

//get all users
export const users = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        return next(errorHandler(500, (error as Error).message));
    }
}
