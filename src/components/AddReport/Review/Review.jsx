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
      };
      console.log(report);
      console.log('formData:', formData);
      // send dispatch
      dispatch({
          type: "REVIEW_SAGA",
          payload: report,
          // payload: formData,
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
        <Button className='report-button' onClick={next} color="secondary">SUBMIT</Button>

      </div>

    </div>
  );
}

export default Review;
