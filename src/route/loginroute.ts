import Router from "express";
import type { Request,Response } from "express";
import {Controllet} from "../controller/user.controller.js";
export const loginroute = Router();

loginroute.route("/login")
.get((req:Request , res:Response)=>{
    res.render("login",{msg:"Welcome Back!"})
})
.post(Controllet.Login);


