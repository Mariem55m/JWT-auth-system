import {env} from "./env.config.js";
import {createPool}  from "mysql2/promise";

export const db = createPool({
    host:env.db_Host!,
    database:env.db_Name!,
    user:env.db_User!,
    password:env.db_Password!,
});






