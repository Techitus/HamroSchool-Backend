import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../database/models/userModel";

dotenv.config();

export interface AuthRequest extends Request {
    user?: {
        id: string;
        email: string;
        password: string;
        role: string;
    }
}

export enum Role {
    Admin = "admin",
}

class AuthMiddleware {
   async isAuthenticated(req: AuthRequest, res: Response, next: NextFunction) {
        const token = req.headers.authorization;
        if (!token || token === undefined) {
            res.status(401).json({
                message: "Unauthorized token",
            });
            return;
        }
        
        jwt.verify(token, process.env.JWT_SECRET as string, async (err, decoded: any): Promise<void> => {
            if (err) {
                res.status(401).json({
                    message: "Invalid token",
                });
                return;
            }
            const userData = await User.findByPk(decoded.id);
            try {
                if (!userData) {
                    res.status(400).json({
                        message: "No User with that token",
                    });
                    return;
                }
                req.user = userData;
                next();
            } catch (err) {
                res.status(500).json({
                    message: "Something went wrong",
                });
            }
        });
    }

    restrictTo(role: Role) {
        return (req: AuthRequest, res: Response, next: NextFunction) => {
            if (req.user && req.user.role === role) {
                next();
            } else {
                res.status(401).json({
                    message: "You are unauthorized to access this route",
                });
            }
        };
    }
}
const authMiddleware = new AuthMiddleware()
export default authMiddleware;