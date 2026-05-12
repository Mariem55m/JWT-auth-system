import {check} from "express-validator";

export const valid=[

    check("password").not().isEmpty().withMessage("The Password Is Required")
    .isLength({min:3}).withMessage("The Password With at Least 3 Chracters"),

    check("email").isEmail().withMessage("The Email Is Required")
];

