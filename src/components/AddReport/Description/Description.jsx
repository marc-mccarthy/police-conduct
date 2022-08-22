import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function Description() {

  const dispatch = useDispatch();


  useEffect(() => {
    console.log();
  }, []);


  const next=() => {
    // create new object
    let newInteractionSummary={
      interaction_summary: interactionSummary
    };
    console.log(newInteractionSummary);
    // send dispatch
    dispatch({type: 'INTERACTION_SUMMARY_SAGA', payload: newInteractionSummary});
    // history.push to next page
    history.push('/outcomes')
  }

  return (
    <div className='report'>

      <div className='report-content'>

        <h2>Description</h2>

        <p>First thing:</p>

        <Button>BACK</Button>
        <Button className='report-button' onClick={next}>NEXT</Button>

      </div>

    </div>
  );
}

export default Description;
