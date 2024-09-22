import { Response } from "express";
import Teachers from "../../database/models/pagemodels/homemodels/teacher";
import { AuthRequest } from "../../middleware/authMiddleware";

class TeacherController{
    public static async addTeacher(req:AuthRequest,res:Response):Promise<void>{
        const{title,description,photo,status} = req.body;
        let fileName
        if(req.file){
            fileName = req.file.originalname;
        }
        const teacher = await Teachers.create({
            title,
            description,
            photo : fileName,
            status
        })
        res.status(201).json({
            message:"Teacher Added Successfully",
            data:teacher
        })
    }
    public static async getTeacher(req:AuthRequest,res:Response):Promise<void>{
        const teacher = await Teachers.findAll({
            where:{
                status:'show'
            }
        })
        res.status(200).json({
            message:"Teacher Fetched Successfully",
            data:teacher
        })
    }
    public static async updateTeacher(req:AuthRequest,res:Response):Promise<void>{
        const teacher = await Teachers.update(req.body,{
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({
            message:"Teacher Updated Successfully",
            data:teacher
        })
    }
    public static async deleteTeacher(req:AuthRequest,res:Response):Promise<void>{
        const teacher = await Teachers.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({
            message:"Teacher Deleted Successfully",
            data:teacher
        })
    }
}
export default TeacherController