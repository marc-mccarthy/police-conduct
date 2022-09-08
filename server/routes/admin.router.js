const { query } = require('express');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

  router.get('/fetchAllReports', (req, res) => {
    let queryString = `SELECT * FROM "report" ORDER BY id ASC;`;
    pool
      .query(queryString)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  });

module.exports = router;