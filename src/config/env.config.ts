import dotenv from "dotenv"

dotenv.config();

export const env={
    port:Number(process.env.PORT)??"",
    db_Name:process.env.db_name??"",
    db_Host:process.env.db_host??"",
    db_Password:process.env.db_password??"",
    db_User:process.env.db_user??"",
    access_Token:process.env.access_token??"",
    secret:process.env.access_token??""
}

