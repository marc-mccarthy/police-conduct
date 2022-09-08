const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET all Users Reports
router.get("/:id", (req, res) => {
  let queryString = `SELECT * FROM "report" WHERE "userID" = $1 ORDER BY id ASC;`;
  let values = [req.user.id];
  pool
    .query(queryString, values)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
