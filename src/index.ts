import express from "express"
import path from "path"
import {env} from "../src/config/env.config.js";
import cookieParser from "cookie-parser";
import {homeroute} from "../src/route/homeroute.js";
import {loginroute} from "../src/route/loginroute.js";
import {registerroute} from "../src/route/registerroute.js";
import {profileroute} from "../src/route/profileroute.js";

const app = express();
const port = env.port;
app.set("views",path.join(import.meta.dirname,"views"));
app.set("view engine","ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(homeroute);
app.use(loginroute);
app.use(registerroute);
app.use(profileroute);
app.listen(port,()=>{
    console.log(`Server Is Running http://localhost:${port}`);
});

