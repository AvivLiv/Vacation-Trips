const dal = require("../database-access-layer/dal");
const cryptoHelper = require("../helpers/crypto-helper");
const jwtHelper = require("../helpers/jwt-helper");

// Register
async function registerAsync(user) {
    user.password = cryptoHelper.hash(user.password);
    console.log(user);
    const sql = `INSERT INTO users VALUES(DEFAULT,?,?,?,?,DEFAULT)`;
    const info = await dal.executeAsync(sql, [user.firstName, user.lastName, user.userName, user.password]);
    user.userId = info.insertId;
    delete user.password;
    user.token = jwtHelper.getNewToken({ user });
    return user;
}

// Login
async function loginAsync(userLogin) {
    userLogin.password = cryptoHelper.hash(userLogin.password);
    const sql = `SELECT userId, firstName, lastName, userName,isAdmin FROM users WHERE userName = ? AND password = ?`;
    const users = await dal.executeAsync(sql, [userLogin.userName, userLogin.password]);
    if (users.length === 0) return null;
    const user = users[0];
    user.token = jwtHelper.getNewToken({ user });
    return user;
}

module.exports = {
    registerAsync,
    loginAsync
};