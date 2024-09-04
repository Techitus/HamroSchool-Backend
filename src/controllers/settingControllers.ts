import { Request, Response } from "express";
import Setting from "../database/models/setting";
import { AuthRequest } from "../middleware/authMiddleware";

class settingController{
    public static async addSetting(req:AuthRequest,res:Response):Promise<void>{
        try{
            const {title,onlineAdmission,recieveEmail,workingHours,logo,address,themeOptions,borderRadius,mobileNo,email,footerText,copyrightText,facebookUrl,youtubeurl} = req.body
            let filename;
            if (req.file){
                filename = req.file?.filename
            }else{
                filename = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_J64H9TeNc_w3Oo8fZ9vWpn8jLVG9bO9toQ&s"
            }
            Setting.create({
                title,
                onlineAdmission,
                recieveEmail,
                workingHours,
                logo: filename,
                address,
                themeOptions,
                borderRadius,
                mobileNo,
                email,
                footerText,
                copyrightText,
                facebookUrl,
                youtubeurl
    
            })
            res.status(200).json({
                message : "Setting added successfully"
            })
        }catch(err){
            res.status(500).json({
                message : "Something went wrong"
            })
        }

    }
public static async updateSetting(req:AuthRequest,res:Response):Promise<void>{
    try{
        const {title,onlineAdmission,recieveEmail,workingHours,logo,address,themeOptions,borderRadius,mobileNo,email,footerText,copyrightText,facebookUrl,youtubeurl} = req.body
        let filename;
        const {id} = req.params
        if (req.file){
            filename = req.file?.filename
        }else{
            filename = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_J64H9TeNc_w3Oo8fZ9vWpn8jLVG9bO9toQ&s"
        }
        Setting.update({
            title,
            onlineAdmission,
            recieveEmail,
            workingHours,
            logo: filename,
            address,
            themeOptions,
            borderRadius,
            mobileNo,
            email,
            footerText,
            copyrightText,
            facebookUrl,
            youtubeurl
    
        },{
            where:{
                id:id
            }
        })
        res.status(200).json({
            message : "Setting updated successfully"
        })
    }catch(err){
        res.status(500).json({
            message : "Something went wrong"
        })
    }
}
public static async fetchSetting(req:Request,res:Response):Promise<void>{
    try{
      const setting = await Setting.findAll()
      res.status(200).json({
          message : "Setting fetched successfully",
          setting
      })
    }catch(err){
        res.status(500).json({
            message : "Internal Server Error"
        })
    }
}
public static async fetchSingleSetting(req:Request,res:Response):Promise<void>{
    
    const {id} = req.params

const singleSetting = await Setting.findAll({
    where : {
        id : id
    }
})
    if(!singleSetting){
        res.status(400).json({
            message : "Setting not found"
        })
        return
    }
    res.status(200).json({        
        message : "Setting fetched successfully",
        setting:singleSetting
    })
    
}
public static async deleteSetting(req:Request,res:Response):Promise<void>{
    try{
        const {id} = req.params
        const setting = await Setting.findAll({
            where:{
                id:id
            }
        })
        if(!setting){
            res.status(400).json({
                message : "Setting not found"
            })
            return
        }
        await Setting.destroy({
            where:{
                id:id
            }
        })
        res.status(200).json({
            message : "Setting deleted successfully"
        })
    }catch(err){
        res.status(500).json({
            message : "Something went wrong"
        })
    }
        res.status(500).json({
            message : "Something went wrong"
        })
    }
}
export default settingController