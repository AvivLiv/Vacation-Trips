const jwt=require("jsonwebtoken");
 
// Make token for user
const key="OnlyMaccabi";

function getNewToken(payload){
    return jwt.sign(payload,key,{expiresIn:"40m"})
}

module.exports={ getNewToken };