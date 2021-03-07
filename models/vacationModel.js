const Joi = require("joi");

//Validate data of vacation
class VacationModel {

    constructor(existingVacation) {
        this.vacationId = existingVacation.vacationId;
        this.destination = existingVacation.destination;
        this.description = existingVacation.description;
        this.fromDate = existingVacation.fromDate;
        this.toDate = existingVacation.toDate;
        this.price = existingVacation.price;
        this.imageFileName = existingVacation.imageFileName;
    };

    static #postValidateSchema = Joi.object({
        vacationId: Joi.number().optional(),
        destination: Joi.string().required().min(3).max(30),
        description: Joi.string().required().min(5).max(1000),
        fromDate: Joi.string().required().min(10).max(30),
        toDate: Joi.string().required().min(10).max(30),
        price: Joi.number().required().min(300).max(10000),
        imageFileName: Joi.string().optional()
    });

    static #putValidateSchema = Joi.object({
        vacationId: Joi.number().optional(),
        destination: Joi.string().required().min(3).max(30),
        description: Joi.string().required().min(5).max(1000),
        fromDate: Joi.string().required().min(10).max(100),
        toDate: Joi.string().required().min(10).max(100),
        price: Joi.number().required().min(300).max(10000),
        imageFileName: Joi.string().optional()
    });

    validatePost() {
        const result = VacationModel.#postValidateSchema.validate(this, { abortEarly: false });
        return result.error ? result.error.message : null;
    }

    validatePut() {
        const result = VacationModel.#putValidateSchema.validate(this, { abortEarly: false });
        return result.error ? result.error.message : null;
    }

}
module.exports = VacationModel;