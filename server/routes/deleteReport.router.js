const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Delete Report
router.delete("/:id", (req, res) => {
  // console.log(req.params);
  const queryString = `DELETE FROM "report" WHERE report.id = $1;`;
  const values = [req.params.id];
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
