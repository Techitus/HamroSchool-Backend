import { Request, Response } from "express";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from "../database/models/userModel";
dotenv.config()
class AuthController {
    public static async loginUser(req:Request,res:Response):Promise<void>{
        const { email,password } = req.body
        if(!email || !password){
            res.status(400).json({
                message : "Please provide all the required fields"
            })
            return
        }
        const [user]= await User.findAll({
            where :{
                email : email
            }

        })
        if(!user){
            res.status(400).json({
                message : "User not found with the given email"
            })
            return
        }
        const isMatched = await bcrypt.compareSync(password,user.password)
        if(!isMatched){
            res.status(400).json({
                message : "Invalid password"
            })
            return
        }
        if(isMatched){
            const token = jwt.sign({id:user.id}, process.env.JWT_SECRET as string,{
                expiresIn: process.env.JWT_EXPIRES_IN as string
            })
            res.status(200).json({
                message : "Login successful",
                token : token
            })
        }
        
    
        
    }
}

export default AuthController