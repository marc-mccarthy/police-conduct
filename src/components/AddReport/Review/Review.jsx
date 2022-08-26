import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import StartContent from '../Start/StartContent';
import OfficerDetailsContent from '../OfficerDetails/OfficerDetailsContent';
import InteractionDetailsContent from '../InteractionDetails/InteractionDetailsContent';
import InteractionSummaryContent from '../InteractionSummary/InteractionSummaryContent';
import OutcomesContent from '../Outcomes/OutcomesContent';
import { useHistory } from 'react-router-dom';

function Review() {

  const dispatch = useDispatch();
  const history = useHistory();

  // form reducer values from the store to be used for review
  const start = useSelector(store => store.startReducer);
  const officerDetails = useSelector(store => store.officerDetailsReducer);
  const interactionDetails = useSelector(store => store.interactionDetailsReducer);
  const interactionSummary = useSelector(store => store.interactionSummaryReducer);
  const outcomes = useSelector(store => store.outcomesReducer);

  // TODO MAKE CHECKBOXES WITH USEEFFECT LIKE IN START? not showing correctly checked or not/needs to be controlled

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
    interactionDate: '',
    interactionTime: '',
    interactionLocation: '',
    referenceNumber: '',
    interactionSummary: '',
    outcomes: '',
  })

  useEffect(() => {
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
  }, [start, officerDetails, interactionDetails, interactionSummary, outcomes])

  const back = () => {
    history.push('/outcomes')
  }

  const next = () => {
      // create new object
      let report = {
          anonymous: start.anonymous,
          public: start.public,
          verification: start.verification,
          handle_info: start.handle_info,
          officer_first: officerDetails.officer_first,
          officer_last: officerDetails.officer_last,
          officer_rank: officerDetails.officer_rank,
          officer_badge: officerDetails.officer_badge,
          officer_department: officerDetails.officer_department,
          officer_anythingelse: officerDetails.officer_anythingelse,
          interaction_date: interactionDetails.interaction_date,
          interaction_time: interactionDetails.interaction_time,
          interaction_location: interactionDetails.interaction_location,
          reference_number: interactionDetails.reference_number,
          interaction_summary: interactionSummary.interaction_summary,
          report_outcomes: outcomes.report_outcomes,
          reporter_first: start.reporter_first,
          reporter_last: start.reporter_last,
          reporter_email: start.reporter_email,
          reporter_phone: start.reporter_phone,
      };
      console.log(report);
      // send dispatch
      dispatch({
          type: "REVIEW_SAGA",
          payload: report,
      });
      // history.push to next page
      history.push("/submitted");
  };

  return (
    <div className='report'>

      <div className='report-content'>

        <StartContent formData={formData} setFormData={setFormData} />

        <OfficerDetailsContent formData={formData} setFormData={setFormData} />

        <InteractionDetailsContent formData={formData} setFormData={setFormData} />

        <InteractionSummaryContent formData={formData} setFormData={setFormData} />

        <OutcomesContent formData={formData} setFormData={setFormData} />

        <Button onClick={back}>Cancel</Button>
        {/* TODO Change this to go back to home/refresh everything */}
        <Button className='report-button' onClick={next}>NEXT</Button>

      </div>

    </div>
  );
}

export default Review;
