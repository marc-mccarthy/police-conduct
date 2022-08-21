import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function Review() {

  const dispatch = useDispatch();


  useEffect(() => {
    console.log();
  }, []);


  const next = () => {
    // create new object

    // send dispatch

    // TODO: history.push to next page
  }

  return (
    <div className='report'>

      <div className='report-content'>

        <h2>Review</h2>

        <p>First thing:</p>

        <Button>BACK</Button>
        <Button className='report-button' onClick={next}>NEXT</Button>

      </div>

    </div>
  );
}

export default Review;
