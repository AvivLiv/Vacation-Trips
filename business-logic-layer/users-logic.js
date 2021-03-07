const dal = require("../database-access-layer/dal");
const jwtHelper = require("../helpers/jwt-helper");

async function getOneUserByIdAsync(userId){
    const sql = `select * from users WHERE userId = ?`;
    const user = await dal.executeAsync(sql,[userId]);
    return user[0];
}

// Update user by id
async function updateUserAsync(user) {
    const sql = `UPDATE users SET firstName = '${user.firstName}', lastName = '${user.lastName}'
    , userName = '${user.userName}' WHERE userId = '${user.userId}'`;
    const info = await dal.executeAsync(sql);
    const updatedUser = await getOneUserByIdAsync(user.userId);
    delete updatedUser.password;
    updatedUser.token = jwtHelper.getNewToken({ updatedUser });
    return info.affectedRows === 0 ? null : updatedUser;
}

module.exports = {
    updateUserAsync
};