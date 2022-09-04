const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);
  const queryString = `UPDATE report SET "anonymous"=$1 WHERE "id"=$21 AND "userID"=${req.user.id}`;
  const values = [
    req.body.anonymous, // $1
];
pool.query(queryString, values).then((result) => {
  res.sendStatus(200);
}).catch((err) => {
  console.log(err);
  res.sendStatus(500);
})
});

module.exports = router;