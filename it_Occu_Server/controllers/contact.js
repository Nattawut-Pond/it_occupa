const { databaseConnection } = require("../database/initDatabase.js");

const contact = async (req, res) => {
  const { name, email, message } = req.body;
  const connection = databaseConnection();
  const query = 'INSERT INTO contact (name, email, message) VALUES (?, ?, ?)';
  const [result] = await connection.execute(query, [name, email, message]);
  res.json(result);
};

module.exports = { contact };
