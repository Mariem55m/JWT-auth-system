import type { RowDataPacket } from "mysql2";
export interface Users extends RowDataPacket{
    emailUser:string,
    Username:string,
    password:string
};

