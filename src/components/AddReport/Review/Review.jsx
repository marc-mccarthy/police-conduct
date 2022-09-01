import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import StartContent from '../Start/StartContent';
import OfficerDetailsContent from '../OfficerDetails/OfficerDetailsContent';
import InteractionDetailsContent from '../InteractionDetails/InteractionDetailsContent';
import InteractionSummaryContent from '../InteractionSummary/InteractionSummaryContent';
import OutcomesContent from '../Outcomes/OutcomesContent';

function Review() {

  //REVIEW IS ALSO THE EDIT PAGE

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  let { id } = useParams();

  // form reducer values from the store to be used for review
  const start = useSelector(store => store.startReducer);
  const officerDetails = useSelector(store => store.officerDetailsReducer);
  const interactionDetails = useSelector(store => store.interactionDetailsReducer);
  const interactionSummary = useSelector(store => store.interactionSummaryReducer);
  const outcomes = useSelector(store => store.outcomesReducer);

  const report = useSelector((store) => store.eachReport);

  const [formData, setFormData] = useState({
    anonymous: false,
    email: '',
    first: '',
    last: '',
    phone: '',
    publicReport: false,
    understand: false,
    verification: false,
    officerFirst: '',
    officerLast: '',
    officerRank: '',
    officerBadge: '',
    officerDept: '',
    officerAnything: '',
    interactionDate: null,
    interactionTime: null,
    interactionLocation: '',
    referenceNumber: '',
    interactionSummary: '',
    outcomes: '',
  })

  useEffect(() => {
    console.log('is the review page now working?');
    if (location.pathname != '/review') {
      dispatch({ type: "EACH_USER_REPORT", payload: id });
    }
  }, []);

  useEffect(() => {
    console.log('report from report reducer:', report);
  }, [report]);

  useEffect(() => {
    if (location.pathname === '/review') {
      if (Object.keys(start).length > 0 && Object.keys(officerDetails).length > 0 && Object.keys(interactionDetails).length > 0 && Object.keys(interactionSummary).length > 0 && Object.keys(outcomes).length > 0) {
        setFormData({
          // ...formData,
          anonymous: start.anonymous,
          email: start.reporter_email,
          first: start.reporter_first,
          last: start.reporter_last,
          phone: start.reporter_phone,
          publicReport: start.public,
          understand: start.handle_info,
          verification: start.verification,
          officerFirst: officerDetails.officer_first,
          officerLast: officerDetails.officer_last,
          officerRank: officerDetails.officer_rank,
          officerBadge: officerDetails.officer_badge,
          officerDept: officerDetails.officer_department,
          officerAnything: officerDetails.officer_anythingelse,
          interactionDate: interactionDetails.interaction_date,
          interactionTime: interactionDetails.interaction_time,
          interactionLocation: interactionDetails.interaction_location,
          referenceNumber: interactionDetails.reference_number,
          interactionSummary: interactionSummary.interaction_summary,
          outcomes: outcomes.report_outcomes,
        })
      }
    } else if(report.length > 0) {
      setFormData({
        // ...formData,
        anonymous: report[0].anonymous,
        email: report[0].reporter_email,
        first: report[0].reporter_first,
        last: report[0].reporter_last,
        phone: report[0].reporter_phone,
        publicReport: report[0].public,
        understand: report[0].handle_info,
        verification: report[0].verification,
        officerFirst: report[0].officer_first,
        officerLast: report[0].officer_last,
        officerRank: report[0].officer_rank,
        officerBadge: report[0].officer_badge,
        officerDept: report[0].officer_department,
        officerAnything: report[0].officer_anythingelse,
        interactionDate: report[0].interaction_date.split('T')[0],
        interactionTime: report[0].interaction_time,
        interactionLocation: report[0].interaction_location,
        referenceNumber: report[0].reference_number,
        interactionSummary: report[0].interaction_summary,
        outcomes: report[0].report_outcomes,
      })
    }


  }, [start, officerDetails, interactionDetails, interactionSummary, outcomes, report])

  const cancel = () => {
    dispatch({ type: 'RESET_FORM' });
    if (location.pathname === '/review') {
      history.push("/home");
    } else {
      history.push(`/reports/${id}`)
    }
  }

  const next = () => {
    // create new object
    let report = {
      anonymous: formData.anonymous,
      public: formData.publicReport,
      verification: formData.verification,
      handle_info: formData.understand,
      officer_first: formData.officerFirst,
      officer_last: formData.officerLast,
      officer_rank: formData.officerRank,
      officer_badge: formData.officerBadge,
      officer_department: formData.officerDept,
      officer_anythingelse: formData.officerAnythingelse,
      interaction_date: formData.interactionDate,
      interaction_time: formData.interactionTime,
      interaction_location: formData.interactionLocation,
      reference_number: formData.referenceNumber,
      interaction_summary: formData.interactionSummary,
      report_outcomes: formData.outcomes,
      reporter_first: formData.first,
      reporter_last: formData.last,
      reporter_email: formData.email,
      reporter_phone: formData.phone,
      id: id,
    };
    if (report.interaction_time === "") {
      report.interaction_time = null;
    };
    if (report.interaction_date === "") {
      report.interaction_date = null;
    };
    console.log(report);
    console.log('formData:', formData);
    // send dispatch
    if (location.pathname === '/review' && formData.understand === true && formData.verification === true) {
      dispatch({ type: "REVIEW_SAGA", payload: report });
      history.push("/submitted");
    } else if(formData.understand === true && formData.verification === true) {
      dispatch({ type: "EDIT_REPORT_SAGA", payload: report });
      history.push(`/reports/${id}`)
    } else {
      alert('You must agree to the data handling and verification.');
    }
  };

  return (
    <div>
      {
        report.length > 0 ?
          <div className='report'>
            <div className='report-content'>

              <StartContent formData={formData} setFormData={setFormData} />

              <OfficerDetailsContent formData={formData} setFormData={setFormData} />

              <InteractionDetailsContent formData={formData} setFormData={setFormData} />

              <InteractionSummaryContent formData={formData} setFormData={setFormData} />

              <OutcomesContent formData={formData} setFormData={setFormData} />

              {
                location.pathname === '/review' ?
                  <div>
                    <Button onClick={cancel} color="error">Cancel</Button>
                    <Button className='report-button' onClick={next} color="secondary">SUBMIT</Button>
                  </div>
                  :
                  <div>
                    <Button onClick={cancel} color="error">Cancel</Button>
                    <Button className='report-button' onClick={next} color="secondary">SAVE</Button>
                  </div>
              }

            </div>
          </div>
          :
          <div>
            <p>Loading...</p>
          </div>
      }
    </div>
  );
}

export default Review;
