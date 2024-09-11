import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import Testimonial from "../database/models/testamonial";

class testimonialController{
    public static async addTestimonial(req:AuthRequest,res:Response):Promise<void>{
        const {name,surName,rank,description,image} = req.body
        let fileName
        if (req.file){
            fileName = req.file?.filename
        }else{
            fileName = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_J64H9TeNc_w3Oo8fZ9vWpn8jLVG9bO9toQ&s"
        }
        try{
            const testimonial = await Testimonial.create({
                name,
                surName,
                rank,
                description,
                image : fileName
            })
            res.status(200).json({
                message : "Testimonial added successfully",
                testimonial
            })
        }catch(err){
            res.status(500).json({
                message : "Internal Server Error"
            })
        }
    }
    public static async updateTestimonial(req:AuthRequest,res:Response):Promise<void>{
        const {name,surName,rank,description,image} = req.body
        const {id} = req.params
        let fileName
        if (req.file){
            fileName = req.file?.filename
        }else{
            fileName = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_J64H9TeNc_w3Oo8fZ9vWpn8jLVG9bO9toQ&s"
        }
        try{
            await Testimonial.update({
                name,
                surName,
                rank,
                description,
                image : fileName
            },{
                where:{
                    id:id
                }
            })
            res.status(200).json({
                message : "Testimonial updated successfully"
            })
        }catch(err){
            res.status(500).json({
                message : "Internal Server Error"
            })
        }

     
    }
    public static async fetchTestimonial(req:AuthRequest,res:Response):Promise<void>{
        try{
            const testimonial = await Testimonial.findAll()
            res.status(200).json({
                message : "Testimonial fetched successfully",
                testimonial
            })
        }catch(err){
            res.status(500).json({
                message : "Internal Server Error"
            })
        }
    }
    public static async deleteTestimonial(req:AuthRequest,res:Response):Promise<void>{
        const {id} = req.params
        try{
            const testimonial = await Testimonial.findAll({
                where: {
                    id : id
                }
            })
            if(testimonial.length > 0){
                await Testimonial.destroy({
                    where : {
                        id : id
                    }
                })
                res.status(200).json({
                    message : "Testimonial deleted successfully"
                })
            }

        }catch(err){
            res.status(500).json({
                message : "Internal Server Error"
            })
        }

    }
}
export default testimonialController