import {db} from "../config/db.js";
import type { ResultSetHeader } from "mysql2";
import type { Users } from "../types/users.js";

export class Repo{
    static async FindByEmail(email:string){
        const sql = "SELECT*FROM User WHERE emailUser=?";
        const [rows]=await db.execute(sql,[email]);
        return (rows as Users[]).length>0?(rows as Users[])[0]:null;
    }

    static async Create(username:string,password:string,email:string){
        const sql=`INSERT INTO USER(emailUser,Username,password)
        WHERE VALUES(?,?,?)`;
        const [rows] = await db.execute(sql,[email,username,password]);
        if((rows as ResultSetHeader).affectedRows===1){
            return true;
        }
        else{
            return false;
        }
    }
}
