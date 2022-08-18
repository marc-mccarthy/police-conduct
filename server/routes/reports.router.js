const { query } = require('express');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/fetchReports', (req, res) => {
	// GET route code here
	pool
		.query(`SELECT * FROM "report" WHERE public = true;`)
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
	// post query adding our form data for report
	pool
		.query(
			`INSERT INTO report ("anonymous", "reporter_first", "reporter_last", "reporter_email", "reporter_phone", "public", "verification", "handle_info", "userID") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`,
			[
				req.body.anonymous,
				req.body.reporter_first,
				req.body.reporter_last,
				req.body.reporter_email,
				req.body.reporter_phone,
				req.body.public,
				req.body.verification,
				req.body.handle_info,
				req.user.id,
			]
		)
		.then(() => res.sendStatus(201))
		.catch(err => {
			console.log('Form submission failed: ', err);
			res.sendStatus(500);
		});
});

module.exports = router;
