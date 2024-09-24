import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import HomeTestimonial from "../database/models/hometestimon";

class HomeTestimonialController{
    public static async addHomeTestimonial(req:AuthRequest,res:Response):Promise<void>{
        const{title,description,status} = req.body;
        const homeTestimonial = await HomeTestimonial.create({
            title,
            description,
            status
        })
        res.status(201).json({
            message:"Home Testimonial Added Successfully",
            data:homeTestimonial
        })
    }
    public static async getHomeTestimonial(req:AuthRequest,res:Response):Promise<void>{
        const homeTestimonial = await HomeTestimonial.findAll({
            where:{
                status:'show'
            }
        })
        res.status(200).json({
            message:"Home Testimonial Fetched Successfully",
            data:homeTestimonial
        })
    }
    public static async updateHomeTestimonial(req:AuthRequest,res:Response):Promise<void>{
        const {id} = req.params;
        const {title,description,status} = req.body;
        const updated = await HomeTestimonial.update({
            title,
            description,
            status
        },{
            where:{
                id
            }
        })    
        res.status(200).json({  
            message:"home testimonial Updated Successfully",
            data:updated
        })
 
}
public static async deleteHomeTestimonial(req:AuthRequest,res:Response):Promise<void>{
    const {id} = req.params;
    const homeTestimonial = await HomeTestimonial.destroy({
        where:{
            id
        }
    })
    res.status(200).json({
        message:"Home Testimonial Deleted Successfully",
    })
}
}
export default HomeTestimonialController