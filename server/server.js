const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const reportsRouter = require('./routes/reports.router');
const eachReportRouter = require('./routes/eachReport.router.js');
const deleteReportRouter = require('./routes/deleteReport.router.js');
const editReportRouter = require('./routes/editReport.router');
const allUserReportRouter = require('./routes/allUserReport.router');
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/reports', reportsRouter);
app.use('/api/each', eachReportRouter);
app.use('/api/delete', deleteReportRouter);
app.use('/api/edit', editReportRouter);
app.use('/api/all', allUserReportRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
