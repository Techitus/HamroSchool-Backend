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

}
export default settingController