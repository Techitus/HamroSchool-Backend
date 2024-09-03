import { Request, Response} from "express";
import multer from "multer";

const storage = multer.diskStorage({
    destination : (req:Request,file:Express.Multer.File,cb:Function)=>{
        const allowedFileType = [".jpg",".jpeg",".png",".gif",".svg"]
        if(!allowedFileType.includes(file.mimetype)){
            cb(new Error("File type not allowed"),false)
            return
        }
        cb(null,"./src/uploads")
    },
    filename : (req:Request,file:Express.Multer.File,cb:Function)=>{
        cb(null,Date.now()+ "-" + file.originalname)
    }
})
export {multer, storage}