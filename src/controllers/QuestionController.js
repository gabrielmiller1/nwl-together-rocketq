const Database = require('../db/config');
module.exports = {
    async index(req, res) {
        const db = await Database();
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const password = req.body.password;

        const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`);

        if (verifyRoom.pass == password) {
            console.log(action);
            if (action == "delete") {
                
                await db.run(`DELETE FROM questions WHERE id = ${questionId}`);
                
            } else if (action == "check"){
                console.log(action);
                await db.run(`UPDATE questions SET checked = 1 WHERE id = ${questionId}`);

            }
        } else{
            res.render('pass-incorrect', {roomId: roomId});
        }

        res.redirect(`/room/${roomId}`);
    },

    async create(req, res) {
        const db = await Database();
        const question = req.body.question;
        const roomId = req.params.room;

        await db.run(`INSERT INTO questions(
            title,
            checked,
            room
        ) VALUES (
            "${question}",
            0,
            ${roomId}
            )`);

        res.redirect(`/room/${roomId}`);
    }
}