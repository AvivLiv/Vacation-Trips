const dal = require("../database-access-layer/dal");

// Get all follows for vacation
async function getAllFollowsByVacationIdAsync(vacationId) {
    const sql = `SELECT * FROM follows WHERE vacationId=${vacationId}`;
    const follows = await dal.executeAsync(sql);
    return (follows);
}

// get all follows
async function getAllFollowsAsync() {
    const sql = `SELECT V.destination ,V.vacationId,GROUP_CONCAT(userId) as counts 
    FROM follows AS F  JOIN vacations AS V  WHERE F.vacationId=V.vacationId GROUP by F.vacationId`;
    const follows = await dal.executeAsync(sql);
    return (follows);
}

// Add follow
async function addFollowAsync(vacationId, userId) {
    const sql = `INSERT INTO follows VALUES(${vacationId},${userId})`;
    const addFollow = await dal.executeAsync(sql);
    return (addFollow);
}

// Delete follow
async function deleteFollowAsync(vacationId, userId) {
    const sql = `DELETE FROM follows WHERE vacationId=${vacationId} AND userId=${userId}`;
    await dal.executeAsync(sql);
}


module.exports = {
    getAllFollowsByVacationIdAsync,
    getAllFollowsAsync,
    addFollowAsync,
    deleteFollowAsync
}