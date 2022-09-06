import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import InteractionDetailsContent from './InteractionDetailsContent';

function InteractionDetails() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    interactionDate: '',
    interactionTime: '',
    interactionLocation: '',
    referenceNumber: '',
  })

  const back = () => {
    history.push('/officer-details');
  };

  const next = () => {
    // create new object
    let newInteractionDetails = {
      interaction_date: formData.interactionDate,
      interaction_time: formData.interactionTime,
      interaction_location: formData.interactionLocation,
      reference_number: formData.referenceNumber
    };
    if (formData.interactionTime === "" || formData.interactionDate === "") {
      alert('Please provide both a time and a date.');
    } else {
      console.log(newInteractionDetails);
      // send dispatch
      dispatch({ type: 'INTERACTION_DETAILS_SAGA', payload: newInteractionDetails });
      // history.push to next page
      history.push('/interaction-summary')
    }
  }

  return (
    <div className='report'>

      <div className='report-content'>

        <InteractionDetailsContent formData={formData} setFormData={setFormData} />

        <Button onClick={back}>BACK</Button>
        <Button className='report-button' onClick={next}>NEXT</Button>

      </div>

    </div>
  );
}

export default InteractionDetails;
