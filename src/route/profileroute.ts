import Router from "express";
import {Controllet} from "../controller/user.controller.js";
export const profileroute = Router();

profileroute.route("/profile")
.get(Controllet.profile);


