// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();

// // router.put('/:id', (req, res) => {
// //     console.log('in privacy router');
// //     const queryString = `UPDATE "report" SET "public" = NOT "public" WHERE "id" = $1;`;
// //     const values = [req.body.id]; // $1
// //     pool.query(queryString, values).then((result) => {
// //     res.sendStatus(200);
// router.post('/', (req, res) => {
//     const type = 'update'
//     const queryString = `UPDATE report SET "public"=$1 WHERE "id"=$2`;
//     const values = [
//       req.body.public, // $1
//       req.body.id // $2
//     ];
//     pool.query(queryString, values).then((result) => {
//     }).catch((err) => {
//         console.log(err);
//         res.sendStatus(500);
//     })
// });

// module.exports = router;