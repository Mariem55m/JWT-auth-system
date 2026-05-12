import Router from "express";
import {verify} from "../services/token.js";
export const homeroute = Router();

homeroute.get("/",(req,res)=>{
    const token = req.cookies.token;

    if (token) {
        try {
            const vtoken = verify(token) as { email: string }; 
            
            return res.render("index", { user: { username: vtoken.email } });
        } catch (e) {
            return res.render("index", { user: null });
        }
    }
    res.redirect("/register");
})


