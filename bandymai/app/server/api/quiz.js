const express = require("express");
const router = express.Router({ mergeParams: true });
const quizController = require("../controllers/quiz");
const { isLoggedIn, isQuizOwner } = require("../middleware/auth");

router.post("/create_quiz", isLoggedIn, quizController.createQuiz);
router.get("/quiz_sets", isLoggedIn, quizController.getQuizzes);
router.patch(
    "/update_quiz/:quizDisplayId",
    isLoggedIn,
    isQuizOwner,
    quizController.updateQuiz
);
router.delete(
    "/delete_quiz/:quizDisplayId",
    isLoggedIn,
    isQuizOwner,
    quizController.deleteQuiz
);
router.get(
    "/quiz/:quizDisplayId",
    isLoggedIn,
    isQuizOwner,
    quizController.getQuiz
);
router.get("/quiz/:quizDisplayId/public", quizController.getQuiz);
router.post("/check_quiz/:quizDisplayId", quizController.checkQuiz);
router.get("/get_attempt_details/:attemptId", quizController.getAttemptDetails);
router.get(
    "/get_attempt_history/:quizDisplayId",
    isLoggedIn,
    isQuizOwner,
    quizController.getAttemptHistory
);
router.get(
    "/get_attempts_by_user",
    isLoggedIn,
    quizController.getAttemptsByUser
);

module.exports = router;
