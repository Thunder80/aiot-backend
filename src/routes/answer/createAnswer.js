const db = require("../../firebase");
const getSnapData = require("../../utils/getSnapData");

const createAnswer = async (req, res) => {
  const exam_id = req.body[0]?.exam_id;
  const student_id = req.body[0]?.student_id;
  const timestamp = req.body[0]?.timestamp;

  const snapS = await db.collection("student").where("id", "==", student_id).get();
  dataS = getSnapData(snapS);
  const student_name = dataS[0]?.name;

  const snap = await db
    .collection("question")
    .where("exam_id", "==", exam_id)
    .get();
  const questions = getSnapData(snap);

  answersData = { exam_id : exam_id, student_id : student_id, data : req.body};

  const batch = db.batch();
  batch.set(db.collection("answer").doc(), answersData);
  
  let marks = 0;
  let total = 0;
  for (const question of questions) {
    total += +question.marks;
  }

  for (const answer of req.body) {
    
    for (const question of questions) {
      if ((question.answer === answer.mcq) && (question.qid === answer.question_id)) {
        marks += +question.marks;
      }
    }
  }

  await batch.commit();
  await db.collection("result").add({
    student_id,
    student_name,
    exam_id,
    marks,
    total,
    timestamp
  });

  res.sendStatus(200);
};

module.exports = createAnswer;
