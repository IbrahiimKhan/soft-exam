const express = require("express");
const router = express.Router();

const {
    create,read
} = require("../controllers/question");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

// creating a question
router.post("/question/create/:userId", requireSignin, isAuth, isAdmin, create);
router.get("/question/:questionId",requireSignin, read);

router.param("userId", userById);
module.exports = router;
