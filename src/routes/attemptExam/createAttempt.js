const db = require("../../firebase");

const getStudents = async (req, res) => {
  const entry = req.body;

  await db.collection("attempt").add(entry);

  res.sendStatus(200);
};

module.exports = getStudents;

