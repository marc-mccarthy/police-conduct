import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function OfficerDetails() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [officerFirst, setOfficerFirst] = useState('');
  const [officerLast, setOfficerLast] = useState('');
  const [officerRank, setOfficerRank] = useState('');
  const [officerBadge, setOfficerBadge] = useState('');
  const [officerDept, setOfficerDept] = useState('');
  const [officerAnything, setOfficerAnything] = useState('');

  useEffect(() => {
    console.log(officerFirst, officerLast, officerRank, officerBadge, officerDept, officerAnything);
  }, [officerFirst, officerLast, officerRank, officerBadge, officerDept, officerAnything]);

  const back = () => {
    history.push('/start');
  };

  const handleOfficerAnything = (e) => {
    setOfficerAnything(e.target.value);
  };

  const handleOfficerBadge = (e) => {
    setOfficerBadge(e.target.value);
  };

  const handleOfficerDept = (e) => {
    setOfficerDept(e.target.value);
  };

  const handleOfficerFirst = (e) => {
    setOfficerFirst(e.target.value);
  };

  const handleOfficerLast = (e) => {
    setOfficerLast(e.target.value);
  };

  const handleOfficerRank = (e) => {
    setOfficerRank(e.target.value);
  };



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
        <input className='report-input' onChange={handleOfficerFirst}></input>

        <p>Last name:</p>
        <input className='report-input' onChange={handleOfficerLast}></input>

        <p>Rank:</p>
        <input className='report-input' onChange={handleOfficerRank}></input>

        <p>Badge Number:</p>
        <input className='report-input' onChange={handleOfficerBadge}></input>

        <p>Department:</p>
        <input className='report-input' onChange={handleOfficerDept}></input>

        <p>Is there anything else you can tell us to help identify this officer</p>
        <input className='report-input' onChange={handleOfficerAnything}></input>

        <Button onClick={back}>BACK</Button>
        <Button className='report-button' onClick={next}>NEXT</Button>

      </div>

    </div>
  );
}

export default OfficerDetails;
