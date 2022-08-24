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

function Review() {

  const dispatch = useDispatch();

  // form reducer values from the store to be used for review
  const start = useSelector(store => store.startReducer);
  const officerDetails = useSelector(store => store.officerDetailsReducer);
  const interactionDetails = useSelector(store => store.interactionDetailsReducer);
  const interactionSummary = useSelector(store => store.interactionSummaryReducer);
  const outcomes = useSelector(store => store.outcomesReducer);

  const [formData, setFormData] = useState({
    anonymous: false,
    email: start.reporter_email,
    first: start.report_first,
    last: start.reporter_last,
    phone: start.reporter_phone,
    publicReport: '',
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

  const next = () => {
    // create new object

    // send dispatch

    // TODO: history.push to next page
  }

  return (
    <div className='report'>

      <div className='report-content'>

        <StartContent formData={formData} setFormData={setFormData} />

        <OfficerDetailsContent formData={formData} setFormData={setFormData} />

        <InteractionDetailsContent formData={formData} setFormData={setFormData} />

        <InteractionSummaryContent formData={formData} setFormData={setFormData} />

        <OutcomesContent formData={formData} setFormData={setFormData} />

        <Button>BACK</Button>
        <Button className='report-button' onClick={next}>NEXT</Button>

      </div>

    </div>
  );
}

export default Review;
