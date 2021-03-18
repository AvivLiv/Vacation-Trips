const dal = require("../database-access-layer/dal");
const uuid = require("uuid");
const fs = require("fs");
const path = require("path");

// Get all vacations
async function getAllVacationsAsync() {
    const sql = `SELECT V.vacationId,V.destination,V.description, V.fromDate,V.toDate,V.price,V.imageFileName,
     Count(f.vacationId) AS follows From vacations AS V
     LEFT JOIN follows AS F  ON V.vacationId = F.vacationId GROUP BY V.vacationId ORDER BY Count(F.userId) DESC`;
    const vacations = await dal.executeAsync(sql);
    return vacations;
};

// Get vacation by id
async function getVacationByIdAsync(id) {
    const sql = `SELECT V.vacationId,V.destination,V.description, V.fromDate,V.toDate,V.price,V.imageFileName,
     Count(f.vacationId) AS follows From vacations AS V
     LEFT JOIN follows AS F  ON V.vacationId = F.vacationId  WHERE V.vacationId=${id}`;
    const vacations = await dal.executeAsync(sql);
    return vacations[0];
};

// Add vacation
async function addVacationAsync(vacation, image) {
    const regex = /\.(gif|jpg|jpeg|tiff|png|ico|xbm|tif|svgz|jif|svg|jfif|webp|bmp|pjpeg|avif)$/i;
    if (image && !path.extname(image.name).match(regex) || !image) return null;
    let newImageFileName = null;
    if (image) {
        const extension = image.name.substr(image.name.lastIndexOf("."));
        newImageFileName = uuid.v4() + extension;
        await image.mv("./images/" + newImageFileName);
    }
    const sql = `INSERT INTO vacations VALUES(
       DEFAULT,'${vacation.destination}',?,
       '${vacation.fromDate}','${vacation.toDate}',
       ${vacation.price},'${newImageFileName}')`;
    const info = await dal.executeAsync(sql, [vacation.description]);
    vacation.vacationId = info.insertId;
    vacation.imageFileName = newImageFileName;
    return vacation;
};

// Update vacation
async function updateFullVacationAsync(vacation, image) {
    const regex = /\.(gif|jpg|jpeg|tiff|png|ico|xbm|tif|svgz|jif|svg|jfif|webp|bmp|pjpeg|avif)$/i;
    if (image) {
        if (!path.extname(image.name).match(regex)) return 400;
        let absolutePath;
        if (vacation.imageFileName) {
            absolutePath = path.join(__dirname, "..", "images", vacation.imageFileName);
            await fs.unlinkSync(absolutePath);
        }
        const extension = image.name.substr(image.name.lastIndexOf("."));
        vacation.imageFileName = uuid.v4() + extension;
        await image.mv("./images/" + vacation.imageFileName);
    }
    const sql = `UPDATE vacations SET destination='${vacation.destination}',
    description=?,fromDate='${vacation.fromDate}',
    toDate='${vacation.toDate}',price=${vacation.price},
    imageFileName='${vacation.imageFileName}' 
    WHERE vacationId=${vacation.vacationId}`;
    const info = await dal.executeAsync(sql, [vacation.description]);
    const vacationUpdated = await getVacationByIdAsync(vacation.vacationId);
    return !info.affectedRows ? 404 : vacationUpdated;
};

// Delete vacation
async function deleteVacationAsync(id) {
    const sql = `SELECT imageFileName from vacations WHERE vacationId=${id}`;
    const response = await dal.executeAsync(sql);
    let absolutePath;
    if (response[0].imageFileName)
        absolutePath = path.join(__dirname, "..", "images", response[0].imageFileName);
    if (await fs.existsSync(absolutePath)) await fs.unlinkSync(absolutePath);
    const sqlDelete = `DELETE FROM vacations WHERE vacationId=${id}`;
    await dal.executeAsync(sqlDelete);
};

module.exports = {
    getAllVacationsAsync,
    addVacationAsync,
    updateFullVacationAsync,
    deleteVacationAsync
}