import {Repo} from "../repo/repo.js";
import {generatetoken , verify} from "../services/token.js";
import type { Request ,Response } from "express";
import { validationResult } from "express-validator";
import {HashPassword , ComparePassword} from "../services/service.js";
export class Controllet{
    static async Register(req:Request,res:Response){
        const valid = validationResult(req);
        const {Username , password , emailUser} = req.body;
        if(!Username || !password || !emailUser ||!valid.isEmpty()){
            return res.status(400).json({msg:"Bad Request Of Validation Register"});
        }
        const found = await Repo.FindByEmail(emailUser);
        if(found){
            return res.status(400).json({msg:"The User Is Aleardy Exist"});
        }
        const Data = await Repo.Create(Username,await HashPassword(password),emailUser);
        res.redirect("/login")
    }

    static async Login(req:Request , res:Response){
        const {password , emailUser} = req.body;
        const found = await Repo.FindByEmail(emailUser);
        if(!found){
            return res.status(404).json({msg:"The User Not Exist"});
        }
        const comp = await ComparePassword(password,found.password);
        if(!comp){
            return res.status(400).json({msg:"The Password Is Not Exist"});
        }
        const token =generatetoken({email:found.emailUser}); 
        const tcookie = res.cookie("token",token)
        return res.redirect("/")
    }

    static async profile(req:Request , res:Response){
        try{
        const tcookie = req.cookies.token;
        const vtoken = verify(tcookie) as {emailUser:string};
        if(vtoken){
            return res.render("profile",{msg:`Welcome ${vtoken.emailUser}`})
        }
    }
    catch(e){
        return res.redirect("/");
    }
}
}


