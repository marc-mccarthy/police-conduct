const { query } = require('express');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/fetchPublicReports', (req, res) => {
  // GET route code here
  pool
    .query(`SELECT * FROM "report" WHERE public = true ORDER BY id ASC;`)
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('Error retrieving failed', error);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/addReport', (req, res) => {
  // console.log our data
  console.log(req.body);
  if (req.user) {
    // post query adding our form data for report if it's an logged in user
    pool
      .query(
        `INSERT INTO report ("anonymous", "public", "verification", "handle_info", "officer_first", "officer_last", "officer_rank", "officer_badge", "officer_department", "officer_anythingelse", "interaction_date", "interaction_time", "interaction_location", "reference_number", "interaction_summary", "report_outcomes", "reporter_first", "reporter_last", "reporter_email", "reporter_phone", "userID") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21) RETURNING "id";`,
        [
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
          req.user.id, // $21
        ]
      )
      .then((result) => {
        console.log('New Report Id:', result.rows[0].id);
        const newID = result.rows[0].id;
        res.send(newID.toString());
        // res.sendStatus(201);
      })
      .catch(err => {
        console.log('Form submission failed: ', err);
        res.sendStatus(500);
      });
  }
  // post query adding our form data for report if it's an undefined guest id
  if (req.user === undefined) {
    pool
      .query(
        `INSERT INTO report ("anonymous", "public", "verification", "handle_info", "officer_first", "officer_last", "officer_rank", "officer_badge", "officer_department", "officer_anythingelse", "interaction_date", "interaction_time", "interaction_location", "reference_number", "interaction_summary", "report_outcomes", "reporter_first", "reporter_last", "reporter_email", "reporter_phone") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) RETURNING "id";`,
        [
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
        ]
      )
      .then((result) => {
        console.log('New Report Id:', result.rows[0].id);
        const newID = result.rows[0].id;
        res.send(newID.toString());
      })
      .catch(err => {
        console.log('Form submission failed: ', err);
        res.sendStatus(500);
      });
  }
});

module.exports = router;
