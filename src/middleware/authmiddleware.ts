import { NextFunction, Request,Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../database/models/user";
dotenv.config()
interface AuthRequest extends Request{
    user?: {
        id :string,
        email :string,
        password :string,
        role :string
    }
}


class AuthMiddleware {
    isAuthenticated(req:AuthRequest, res:Response, next:NextFunction){
        const token = req.headers.authorization
        if(!token || token === undefined){
            res.status(401).json({
                message: "Unauthorized token"
            })
            return
        }
        console.log(process.env.JWT_SECRET)
        jwt.verify(token, process.env.JWT_SECRET as string, async(err, decoded:any):Promise<void> => {
            if(err){
                res.status(401).json({
                    message: "Invalid token"
                })
                return
            }
          const userData = await User.findByPk(decoded.id)
          if(!userData){
            res.status(400).json({
                message : "No User with that token"
            })
            return
          }
          req.user = userData
          next()

        })
    }
}