import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import InteractionSummaryContent from './InteractionSummaryContent';

function InteractionSummary() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    interactionSummary: '',
  })

  const back = () => {
    history.push('/interaction-details')
  }

  const next = () => {
    // create new object
    let newInteractionSummary = {
      interaction_summary: formData.interactionSummary
    };
    console.log(newInteractionSummary);
    // send dispatch
    dispatch({ type: 'INTERACTION_SUMMARY_SAGA', payload: newInteractionSummary });
    // history.push to next page
    history.push('/outcomes')
  };

  return (
    <div className='report'>

      <div className='report-content'>

        <InteractionSummaryContent formData={formData} setFormData={setFormData} />

        <Button onClick={back}>BACK</Button>
        <Button className='report-button' onClick={next}>NEXT</Button>

      </div>

    </div>
  );
}

export default InteractionSummary;
