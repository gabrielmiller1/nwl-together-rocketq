const Database = require("../db/config");

module.exports = {
    async create(req, res) {
        const db = await Database();
        const pass = req.body.password;
        let roomId ="";
        let isRoom = true;

        while (isRoom) {

            for (var i = 0; i < 6; i++) {
                roomId += Math.floor(Math.random() * 5).toString();
            }

            const roomsExistId = await db.all(`SELECT id FROM rooms`);

            isRoom = roomsExistId.some(roomsExistId => { roomsExistId == roomId });

            if (!isRoom) {
                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                ) VALUES (
                    ${parseInt(roomId)},
                    ${pass}
                )`);
            }
        }

        await db.close();

        res.redirect(`/room/${roomId}`);
    },

    async open(req, res) {
        const db = await Database();
        const roomId = req.params.room;
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and checked = 0`);
        const questionsRead = await db.all(`SELECT * FROM questions WHERE checked = ${roomId} and checked = 1`);
        
        res.render('room.ejs', { roomId: roomId, questions: questions, questionsRead: questionsRead });
    }
}