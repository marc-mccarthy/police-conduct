// dotenv import
require('dotenv').config()

// twilio sendgrid api import
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendGrid = (user, values, type, reportId) => {
  const typeReport = type === 'add' ? 'New' : 'Updated'
  const currentDate = new Date();
  const message = {
    to: process.env.SENDGRID_API_KEY_EMAIL, // change to your recipient email
    from: process.env.SENDGRID_API_KEY_EMAIL, // change to your verified sender email

    subject: `${typeReport} Report #${reportId} added to PoliceConduct.org`,
    text: `${typeReport} Report #${reportId} added to PoliceConduct.org`,

    html:
      `<div>
        <h3>${typeReport} report for the PoliceConduct.org platform on: <b>${currentDate.getMonth() + 1}-${currentDate.getDate()}-${currentDate.getFullYear()}</b></h3>
        <ul style="list-style-type: none; padding: 5px; font-size: 14px; width: 50%;">
          <li><b>Report #:</b> ${reportId}</li>
          <li><b>Username:</b> ${user === undefined ? 'Guest User' : user.username}</li>
          <li><b>Anonymous Request:</b> ${values.anonymous === true ? 'Yes' : 'No'}</li>
          <li><b>Public Report:</b> ${values.public === true ? 'Yes' : 'No'}</li>
          <li><b>Reporter Name:</b> ${values.reporter_first} ${values.reporter_last}</li>
          <li><b>Reporter Email:</b> ${values.reporter_email}</li>
          <li><b>Reporter Phone:</b> ${values.reporter_phone}</li>
          <li><b>Interaction Date & Time:</b> ${values.interaction_date} @ ${values.interaction_time}</li>
          <li><b>Interaction Location:</b> ${values.interaction_location}</li>
          <li><b>Interaction Reference #:</b> ${values.reference_number}</li>
          <li><b>Interaction Summary:</b> ${values.interaction_summary}</li>
          <li><b>Officer Name:</b> ${values.officer_first} ${values.officer_last}</li>
          <li><b>Officer Rank:</b> ${values.officer_rank}</li>
          <li><b>Officer Badge #:</b> ${values.officer_badge}</li>
          <li><b>Officer Department:</b> ${values.officer_department}</li>
          <li><b>Officer Badge #:</b> ${values.officer_badge}</li>
          <li><b>Notes about Officer:</b> ${values.officer_anythingelse}</li>
          <li><b>User Wanted Outcome(s):</b> ${values.report_outcomes}</li>
        </ul>
      </div>`,
  }
  sgMail
    .send(message)
    .then(() => {
    })
    .catch((error) => {
      console.error(error)
    })
}

module.exports = sendGrid;
