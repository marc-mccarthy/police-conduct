const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// require sendgrid api logic
const sendGrid = require('../modules/sendGrid');

// Update Report
router.post('/', (req, res) => {
  const type = 'update'
  const queryString = `UPDATE report SET "anonymous"=$1, "public"=$2, "verification"=$3, "handle_info"=$4, "officer_first"=$5, "officer_last"=$6, "officer_rank"=$7, "officer_badge"=$8, "officer_department"=$9, "officer_anythingelse"=$10, "interaction_date"=$11, "interaction_time"=$12, "interaction_location"=$13, "reference_number"=$14, "interaction_summary"=$15, "report_outcomes"=$16, "reporter_first"=$17, "reporter_last"=$18, "reporter_email"=$19, "reporter_phone"=$20 WHERE "id"=$21`;
  const values = [
    req.body.anonymous, // $1
    req.body.public, // $2
    req.body.verification, // $3
    req.body.handle_info, // $4
    req.body.officer_first, // $5
    req.body.officer_last, // $6
    req.body.officer_rank, // $7
    req.body.officer_badge, // $8
    req.body.officer_department, // $9
    req.body.officer_anythingelse, // $10
    req.body.interaction_date, // $11
    req.body.interaction_time, // $12
    req.body.interaction_location, // $13
    req.body.reference_number, // $14
    req.body.interaction_summary, // $15
    req.body.report_outcomes, // $16
    req.body.reporter_first, // $17
    req.body.reporter_last, // $18
    req.body.reporter_email, // $19
    req.body.reporter_phone, // $20
    req.body.id, // $21
  ];
  pool.query(queryString, values).then((result) => {
    // sendgrid api function
    sendGrid(req.user, req.body, type);
    res.sendStatus(200);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
});

module.exports = router;
