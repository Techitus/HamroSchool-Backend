import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import Branch from "../database/models/branch";

class BranchController {
    public static async addBranch(req:AuthRequest,res:Response): Promise<void> {
        const {branchName, schoolName,email,mobileNo,address,systemLogo} = req.body;
        try{
            let fileName;
            if(req.file){
                fileName = req.file.originalname;
            }
         const branch = await Branch.create({
             branchName,
             schoolName,
             email,
             mobileNo,
             address,
             systemLogo : fileName
         })
         res.status(201).json({
             message: "Branch added successfully",
             data: branch
         })
        }catch(e){
            res.status(500).json({
                 message: "Interal server error"
                })
        }
    }
    public static async getBrannch(req:AuthRequest,res:Response): Promise<void> {
        try{
                const branches = await Branch.findAll()
                res.status(200).json({
                    message: "Branch fetched successfully",
                    data: branches
                })
        }catch(err){
            res.status(500).json({
                message: "Internal server error"
            })
        }
    }
    public static async getSingleBranch(req:AuthRequest,res:Response): Promise<void> {
        const {id} = req.params;
        try{
            const branch = await Branch.findByPk(id)
            res.status(200).json({
                message: "Branch fetched successfully",
                data: branch
            })
        }catch(err){
            res.status(500).json({
                message: "Internal server error"
            })
        }
    }
    public static async updateBranch(req:AuthRequest,res:Response): Promise<void> {
        const {id} = req.params;
        const {branchName, schoolName,email,mobileNo,address,systemLogo} = req.body;
        try{
            let fileName;
            if(req.file){
                fileName = req.file.originalname;
            }
            const updated = await Branch.update({
                branchName,
                schoolName,
                email,
                mobileNo,
                address,
                systemLogo : fileName
            },{
                where:{
                    id
                }
            })
            res.status(200).json({
                message: "Branch updated successfully",
                data: updated
            })
        }catch(e){
            res.status(500).json({
                message: "Internal server error"
            })
        }

    }
     public static async deleteBranch(req:AuthRequest,res:Response): Promise<void> {
        const {id} = req.params;
        try{
            const deleted = await Branch.destroy({
                where:{
                    id : id
                }
            })
            res.status(200).json({
                message: "Branch deleted successfully",
                data: deleted
            })
        }catch(e){
            res.status(500).json({
                message: "Internal server error"
            })
        }
    }

}
export default BranchController