import { Request, Response } from "express";

class AuthController {
    public static async loginUser(req:Request,res:Response):Promise<void>{
        const { email,password } = req.body
        if(!email || !password){
            res.status(400).json({
                message : "Please provide all the required fields"
            })
            return
        }
        
        
    }
}