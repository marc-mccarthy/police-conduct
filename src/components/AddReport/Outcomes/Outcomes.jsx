import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Outcomes() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [outcomes, setOutcomes] = useState('');

  useEffect(() => {
    console.log(outcomes);
  }, [outcomes]);

  const back = () => {
    history.push('/interaction-summary')
  }

  const handleOutcomes = (e) => {
    setOutcomes(e.target.value);
  }

  const next = () => {
    // create new object
    let newOutcomes={
      report_outcomes: outcomes,
    };
    console.log(newOutcomes);
    // send dispatch
    dispatch({type: 'OUTCOMES_SAGA', payload: newOutcomes});
    // history.push to next page
    history.push('/review');
  }

  return (
    <div className='report'>

      <div className='report-content'>

        <h2>Outcomes</h2>

        <p>What, if anything, would you like to happen as a result of your report?</p>
        <p>(We cannot guarantee that your desired outcome will happen.)</p>
        <textarea className='report-input' rows="20" onChange={handleOutcomes} />

        <Button onClick={back}>BACK</Button>
        <Button className='report-button' onClick={next}>NEXT</Button>

      </div>

    </div>
  );
}

export default Outcomes;
