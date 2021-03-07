const express = require("express");
const vacationsLogic = require("../business-logic-layer/vacations-logic");
const VacationModel = require("../models/vacationModel");
const socketHelper = require("../helpers/socket-helper");
const verifyLoggedIn = require("../middleware/verify-login");
const verifyAdmin = require("../middleware/verify-admin");
const errorHelper = require("../helpers/errors-helper");
const path = require("path");

const router = express.Router();

// Get vacations
router.get("/", verifyLoggedIn, async (request, response) => {
    try {
        const vacations = await vacationsLogic.getAllVacationsAsync();
        response.json(vacations);
    }
    catch (err) {
        response.status(500).send(errorHelper.getError(err));
    }
});

// Add vacation
router.post("/", verifyAdmin, async (request, response) => {
    try {
        const vacation = new VacationModel(request.body);
        const error = vacation.validatePost();
        if (error) {
            response.status(400).send(error);
            return;
        }
        const addedVacation = await vacationsLogic.addVacationAsync(vacation, request.files.imageFileName);
        if (!addedVacation) return response.status(400).send("Wrong field try again.");
        response.status(201).json(addedVacation);
        socketHelper.vacationAdded(addedVacation);
    }
    catch (err) {
        response.status(500).send(errorHelper.getError(err));
    }
});

// Update vacation
router.put("/:vacationId", verifyAdmin, async (request, response) => {
    try {
        const vacation = new VacationModel(request.body);
        vacation.vacationId = +request.params.vacationId;
        console.log(vacation.imageFileName);
        const error = vacation.validatePut();
        if (error) {
            response.status(400).send(error);
            return;
        }
        const updatedVacation = await vacationsLogic.updateFullVacationAsync(vacation, request.files ? request.files.newImageFileName : null);
        console.log(updatedVacation);
        if (updatedVacation === 400) return response.status(400).send("Wrong field try again.");
        if (updatedVacation === 404) return response.status(404).send("Vacation not found.");
        if (!updatedVacation) {
            response.status(404).send(`id ${vacation.vacationId} not found`);
            return;
        }
        response.json(updatedVacation);
        socketHelper.vacationUpdated(updatedVacation);
    }
    catch (err) {
        response.status(500).send(errorHelper.getError(err));
    }
});

// Delete vacation
router.delete("/:vacationId", verifyAdmin, async (request, response) => {
    try {
        const id = +request.params.vacationId;
        await vacationsLogic.deleteVacationAsync(id)
        response.sendStatus(204);
        socketHelper.vacationDeleted(id);
    }
    catch (err) {
        response.status(500).send(errorHelper.getError(err));
    }
})

// Get image
router.get("/image/:imageFileName", async (request, response) => {
    try {
        const imageFileName = request.params.imageFileName;
        let reqPath = path.join(__dirname, "../");
        response.sendFile(reqPath + "/images/" + imageFileName);
    }
    catch (err) {
        response.status(500).send(errorHelper.getError(err));
    }
})

module.exports = router;