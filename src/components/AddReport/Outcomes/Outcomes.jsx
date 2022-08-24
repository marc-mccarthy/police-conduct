import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import OutcomesContent from './OutcomesContent';

function Outcomes() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    outcomes: '',
  })

  const back = () => {
    history.push('/interaction-summary')
  }

  const next = () => {
    // create new object
    let newOutcomes = {
      report_outcomes: formData.outcomes,
    };
    console.log(newOutcomes);
    // send dispatch
    dispatch({ type: 'OUTCOMES_SAGA', payload: newOutcomes });
    // history.push to next page
    history.push('/review');
  }

  return (
    <div className='report'>

      <div className='report-content'>

        <OutcomesContent formData={formData} setFormData={setFormData} />

        <Button onClick={back}>BACK</Button>
        <Button className='report-button' onClick={next}>NEXT</Button>

      </div>

    </div>
  );
}

export default Outcomes;
