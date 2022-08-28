import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Submitted() {

  const dispatch = useDispatch();
  const history = useHistory();


  useEffect(() => {
    console.log();
  }, []);

  return (
    <div className='report'>

      <div className='report-content'>

        <h2>Submitted</h2>

        <p>Thank you for your submission! Your report will be emailed to the appropriate Internal Affairs office.</p>
        <p>Your report number is: </p>

        <br></br>

        <Button onClick={() => {history.push('/start')}}>SUBMIT ANOTHER REPORT</Button>
        
        <br></br>
        <br></br>

        <Button color="secondary" onClick={() => {history.push('/viewReports')}}>VIEW ALL PUBLIC REPORTS</Button>

      </div>

    </div>
  );
}

export default Submitted;
