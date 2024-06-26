const db = require("../../firebase");
const getSnapData = require("../../utils/getSnapData");

const getTeachers = async (req, res) => {
  const { dept } = req.params;

  const snap = await db.collection("teacher").where("dept", "==", dept).get();
  const data = getSnapData(snap);

  res.json( data );
};

module.exports = getTeachers;
