import { Request, Response } from "express";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from "../database/models/userModel";
dotenv.config()
class AuthController {
    public static async registerUser(req:Request, res:Response):Promise<void>{
        const {name, email, password, role} = req.body
        if(!name || !email || !password){
             res.status(400).json({message:"Please provide all the required fields"})
             return
        }
        try{
            const existinguser = await User.findOne({
                where : {
                    email : email ,  
                    name :name
                }

            })
            if(existinguser){
                res.status(400).json({message:"User already exists"})
                return
            }
        User.create({
            name ,
            email,
            password : bcrypt.hashSync(password, 8),
            role

        })
        res.status(201).json({message:"User created successfully"})

        }catch(error){
            res.status(500).json({message:"Internal server error"})
            return
        }

    }
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