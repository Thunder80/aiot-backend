const { Router } = require("express");
const AnswerRouter = require("./answer");
const ExamRouter = require("./exam");
const OCRRouter = require("./ocr");
const QuestionRouter = require("./question");
const StudentRouer = require("./student");
const TeacherRouter = require("./teacher");
const StudentByEmailRouter = require("./studentByEmail");
const TeacherByEmailRouter = require("./teacherByEmail");
const SubjectsRouter = require("./subjects");

const router = Router();

router.use("/ocr", OCRRouter);
router.use("/teacher", TeacherRouter);
router.use("/student", StudentRouer);
router.use("/exam", ExamRouter);
router.use("/question", QuestionRouter);
router.use("/answer", AnswerRouter);
router.use("/studentByEmail", StudentByEmailRouter);
router.use("/teacherByEmail", TeacherByEmailRouter);
router.use("/subjects", SubjectsRouter);

module.exports = router;
