const dal = require("../database-access-layer/dal");

// Update user by id
async function updateUserAsync(user) {
    const sql = `UPDATE users SET firstName = '${user.firstName}', lastName = '${user.lastName}'
    , userName = '${user.userName}' WHERE userId = '${user.userId}'`;
    const info = await dal.executeAsync(sql);
    return info.affectedRows === 0 ? null : user;
}

module.exports = {
    updateUserAsync
};