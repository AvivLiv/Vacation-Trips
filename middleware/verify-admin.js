const jwt = require("jsonwebtoken");


// authorization: "Bearer the-token" to header
function verifyLoggedIn(request, response, next) {


    if (!request.headers.authorization) {
        response.status(401).send("You are not logged-in!");
        return;
    }


    const token = request.headers.authorization.split(" ")[1];


    if (!token) {
        response.status(401).send("You are not logged-in!");
        return;
    }

    // Verify the token
    jwt.verify(token, "OnlyMaccabi", (err, payload) => {

        if (err && err.message === "jwt expired") {
            response.status(403).send("Your login session has expired. Please login again.");
            return;
        }

        if (err) {
            response.status(401).send("You are not logged-in!");
            return;
        }

        if (!payload.user.isAdmin) {
            response.status(403).send("You are not admin!");
            return;
        }

        next();
    });
}

module.exports = verifyLoggedIn;