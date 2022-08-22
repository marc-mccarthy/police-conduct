import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button, setRef } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function InteractionDetails() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [interactionDate, setInteractionDate] = useState('');
  const [interactionTime, setInteractionTime] = useState('');
  const [interactionLocation, setInteractionLocation] = useState('');
  const [referenceNumber, setReferenceNumber] = useState('');

  useEffect(() => {
    console.log(interactionDate, interactionTime, interactionLocation, referenceNumber);
  }, [interactionDate, interactionTime, interactionLocation, referenceNumber]);

  const back = () => {
    history.push('/officer-details');
  };

  const handleDate = (e) => {
    setInteractionDate(e.target.value);
  };

  const handleLocation = (e) => {
    setInteractionLocation(e.target.value);
  };

  const handleTime = (e) => {
    setInteractionTime(e.target.value);
  };

  const handleReferenceNumber = (e) => {
    setReferenceNumber(e.target.value);
  };

  const next = () => {
    // create new object
    let newInteractionDetails = {
      interaction_date: interactionDate,
      interaction_time: interactionTime,
      interaction_location: interactionLocation,
      reference_number: referenceNumber
    };
    console.log(newInteractionDetails);
    // send dispatch
    dispatch({type: 'INTERACTION_DETAILS_SAGA', payload: newInteractionDetails});
    // history.push to next page
    history.push('/description')
  }

  return (
    <div className='report'>

      <div className='report-content'>

        <h2>Interaction Details</h2>

        <p>Date of interaction:</p>
        <input className='report-input' type="date" onChange={handleDate}></input>

        <p>Time of interaction:</p>
        <input className='report-input' onChange={handleLocation}></input>

        <p>Location of interaction:</p>
        <input className='report-input' onChange={handleTime}></input>

        <p>Incident reference number (if you have one):</p>
        <input className='report-input' onChange={handleReferenceNumber}></input>

        <Button onClick={back}>BACK</Button>
        <Button className='report-button' onClick={next}>NEXT</Button>

      </div>

    </div>
  );
}

export default InteractionDetails;
