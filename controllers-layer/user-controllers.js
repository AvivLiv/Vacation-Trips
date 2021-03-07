const express = require("express");
const usersLogic = require("../business-logic-layer/users-logic");
const router = express.Router();
const errorHelper = require("../helpers/errors-helper");
const verifyLogin = require("../middleware/verify-login")

// Update user by id
router.put("/update/:userId", verifyLogin, async (request, response) => {
    try {
        const userId = request.params.userId;
        request.body.userId = userId;
        const updatedUser = await usersLogic.updateUserAsync(request.body);
        response.json(updatedUser);
    }
    catch (err) {
        response.status(500).send(errorHelper.getError(err));
    }
});

module.exports = router;