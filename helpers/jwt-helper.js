const jwt=require("jsonwebtoken");

const key="OnlyMaccabi";

function getNewToken(payload){
    return jwt.sign(payload,key,{expiresIn:"40m"})
}

module.exports={ getNewToken };