const express = require("express");
const router = express.Router();

/* GET quotes listing. */
console.log("i am in quotes.js");
router.get("/", function (req, res, next) {
  res.json({
    data: [
      {
        quote: "First, solve the problem. Then, write the code.",
        author: "John Johnson",
      },
    ],
    meta: {
      page: 1,
    },
  });
});

module.exports = router;
