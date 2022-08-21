import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function OfficerDetails() {

  const dispatch = useDispatch();


  useEffect(() => {
    console.log();
  }, []);


  const next = () => {
    // create new object

    // send dispatch
    // dispatch({ type: 'OFFICER_DETAILS', payload: newOfficerDetails });


    // TODO: history.push to next page
  }

  return (
    <div className='report'>

      <div className='report-content'>

        <h2>Officer Details</h2>

        <p>First name:</p>

        <Button>BACK</Button>
        <Button className='report-button' onClick={next}>NEXT</Button>

      </div>

    </div>
  );
}

export default OfficerDetails;
