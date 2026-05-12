import Router from "express";
import type { Request,Response } from "express";
import {Controllet} from "../controller/user.controller.js";
export const registerroute = Router();

registerroute.route("/register")
.get((req:Request , res:Response)=>{
    res.render("register",{msg:""})
})
.post(Controllet.Register);


