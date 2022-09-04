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
const adminRouter = require('./routes/admin.router');
const privacyReportRouter = require('./routes/privacyReport.router.js');
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
app.use('/api/admin', adminRouter);
app.use('/api/privacy', privacyReportRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
