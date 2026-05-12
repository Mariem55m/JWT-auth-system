import jwt from "jsonwebtoken";
import {env} from "../config/env.config.js";
export function generatetoken(payload:string |object){
    return jwt.sign(payload,env.access_Token,{expiresIn:"1h"})
}

export function verify(token:string){
    return jwt.verify(token,env.access_Token);
}
