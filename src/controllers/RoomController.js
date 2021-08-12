const Database = require("../db/config");

module.exports = {
    async create(req, res) {
        const db = await Database();
        const pass = req.body.password;
        let roomId = "";


        for(var i = 0; i < 6; i++){
            roomId += Math.floor(Math.random() * 5).toString();
        }

        await db.run(`INSERT INTO rooms (
            id,
            pass
        ) VALUES (
            ${parseInt(roomId)},
            ${pass}
        )`);

        await db.close();

        res.redirect(`/room/${roomId}`);
    }
}