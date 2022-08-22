import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function Outcomes() {

  const dispatch = useDispatch();


  useEffect(() => {
    console.log();
  }, []);


  const next=() => {
    // create new object
    let newOutcomes={
      report_outcomes: reportOutcomes,
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

        <p>First thing:</p>

        <Button>BACK</Button>
        <Button className='report-button' onClick={next}>NEXT</Button>

      </div>

    </div>
  );
}

export default Outcomes;
