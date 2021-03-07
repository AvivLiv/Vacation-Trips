const authLogic = require("../business-logic-layer/auth-logic");
const errorsHelper = require("../helpers/errors-helper");
const express = require("express");
const router = express.Router();
const UserModel = require("../models/userModel");

// Register
router.post("/register", async (request, response) => {
    try {
        const user = new UserModel(request.body);
        const error = user.validateRegister();
        if (error) {
            response.status(400).send(error);
            return;
        }
        const addedUser = await authLogic.registerAsync(user);
        response.status(201).json(addedUser);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

// Login
router.post("/login", async (request, response) => {
    try {
        const user = new UserModel(request.body);
        const error = user.validateLogin();
        if (error) {
            response.status(400).send(error);
            return;
        }
        const loggedInUser = await authLogic.loginAsync(user);
        if (!loggedInUser) return response.status(401).send("Incorrect username or password.");
        response.json(loggedInUser);
    }
    catch (err) {
        response.status(500).send(errorsHelper.getError(err));
    }
});

module.exports = router;