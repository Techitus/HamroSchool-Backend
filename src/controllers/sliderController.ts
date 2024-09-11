import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import Slider from "../database/models/slider";

class sliderController {
    public static async addSlider(req:AuthRequest,res:Response):Promise<void>{
        const {sliderTitle,position,buttonText1,buttonText2,buttonUrl1,buttonUrl2,description,sliderImage} = req.body
           let fileName;
           if (req.file){
               fileName = req.file?.filename
           }else{
               fileName = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_J64H9TeNc_w3Oo8fZ9vWpn8jLVG9bO9toQ&s"
           }
       
        try{
            const slider = await Slider.create({
                sliderTitle,
                position,
                buttonText1,
                buttonText2,
                buttonUrl1,
                buttonUrl2,
                description,
                sliderImage : fileName
            })
            res.status(200).json({
                message : "Slider added successfully",
                slider
            })
        }catch(err){
            res.status(500).json({
                message : "Iternal Server Error"
            })
        }
    }
    public static async updateSlider(req:AuthRequest,res:Response):Promise<void>{
        const {sliderTitle,position,buttonText1,buttonText2,buttonUrl1,buttonUrl2,description,sliderImage} = req.body
        const {id} = req.params
        let filename;
        if (req.file){
            filename = req.file?.filename
        }else{
            filename = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_J64H9TeNc_w3Oo8fZ9vWpn8jLVG9bO9toQ&s"
        }
        try{
            await Slider.update({
                sliderTitle,
                position,
                buttonText1,
                buttonText2,
                buttonUrl1,
                buttonUrl2,
                description,
                sliderImage
            },{
                where:{
                    id:id
                }
            })
            res.status(200).json({
                message : "Slider updated successfully"
            })
        }catch(err){
            res.status(500).json({
                message : "Internal Server Error"
            })
        }

     
    }
    public static async fetchSlider(req:AuthRequest,res:Response):Promise<void>{
        try{
            const slider = await Slider.findAll()
            res.status(200).json({
                message : "Slider fetched successfully",
                slider
            })
        }catch(err){
            res.status(500).json({
                message : "Internal Server Error"
            })
        }
    }
    public static async deleteSlider(req:AuthRequest,res:Response):Promise<void>{
        const {id} = req.params
        try{
            const slider = await Slider.findAll({
                where: {
                    id : id
                }
            })
            if(slider.length > 0){
                await Slider.destroy({
                    where : {
                        id : id
                    }
                })
                res.status(200).json({
                    message : "Slider deleted successfully"
                })
            }

        }catch(err){
            res.status(500).json({
                message : "Internal Server Error"
            })
        }

    }
}

export default sliderController