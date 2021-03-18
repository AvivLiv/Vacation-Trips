const crypto = require("crypto");

// Make hash to password
function hash(plainText) {

    return crypto.createHash("sha512").update(plainText).digest("hex");

};

module.exports = {
    hash
};