const express = require('express');
const router = express.Router();
const { databaseConnection } = require("../database/initDatabase.js");


router.get('/api/newquestion/:type', async (req, res) => {
    const connection = databaseConnection();
    try {
        const { type } = req.params;
        const query = `
      SELECT id, question_type, question 
      FROM newquestion 
      WHERE question_type = ? 
      ORDER BY id 
      LIMIT 10
    `;
        const [questions] = await connection.execute(query, [type]);
        res.json({
            message: "Find new question success",
            results: questions
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching questions' });
    }
});
