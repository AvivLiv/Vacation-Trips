const express = require("express");
const followsLogic = require("../business-logic-layer/follows-logic");
const router = express.Router();
const errorHelper = require("../helpers/errors-helper");
const verifyLogin = require("../middleware/verify-login")

// Get all follows for vacation
router.get("/:vacationId", async (request, response) => {
    try {
        const vacationId = request.params.vacationId;
        const vacationFollows = await followsLogic.getAllFollowsByVacationIdAsync(vacationId);
        response.json(vacationFollows);
    }
    catch (err) {
        response.status(500).send(errorHelper.getError(err));
    }
});

// get all follows
router.get("/", verifyLogin, async (request, response) => {
    try {
        const vacationFollows = await followsLogic.getAllFollowsAsync();
        response.json(vacationFollows);
    }
    catch (err) {
        response.status(500).send(errorHelper.getError(err));
    }
});

// Add follow
router.post("/add-follow/:vacationId/:userId", verifyLogin, async (request, response) => {
    try {
        const vacationId = request.params.vacationId;
        const userId = request.params.userId;
        const followAdded = await followsLogic.addFollowAsync(vacationId, userId);
        response.status(201).json(followAdded);
    }
    catch (err) {
        response.status(500).send(errorHelper.getError(err))
    }
});

// Delete follow
router.delete("/delete-follow/:vacationId/:userId", verifyLogin, async (request, response) => {
    try {
        const vacationId = request.params.vacationId;
        const userId = request.params.userId;
        await followsLogic.deleteFollowAsync(vacationId, userId);
        response.sendStatus(204);
    }
    catch (err) {
        response.status(500).send(errorHelper.getError(err))
    }
});

module.exports = router;