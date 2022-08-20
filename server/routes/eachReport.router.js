const { query } = require('express');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get("/:id", (req, res) => {
    let queryString = `SELECT * FROM "report" WHERE report.id = $1;`;
    let values = [req.params.id];
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
