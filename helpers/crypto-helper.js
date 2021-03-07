const crypto = require("crypto");

function hash(plainText) {

    return crypto.createHash("sha512").update(plainText).digest("hex");

}

module.exports = {
    hash
};