import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import OfficerDetailsContent from './OfficerDetailsContent';

function OfficerDetails() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    officerFirst: '',
    officerLast: '',
    officerRank: '',
    officerBadge: '',
    officerDept: '',
    officerAnything: '',
  });

  const back = () => {
    history.push('/start');
  };

  const next = () => {
    // create new object
    let newOfficerDetails = {
      officer_first: formData.officerFirst,
      officer_last: formData.officerLast,
      officer_rank: formData.officerRank,
      officer_badge: formData.officerBadge,
      officer_department: formData.officerDept,
      officer_anythingelse: formData.officerAnything,
    };
    // send dispatch
    dispatch({ type: 'OFFICER_DETAILS_SAGA', payload: newOfficerDetails });
    // history.push to next page
    history.push('/interaction-details');
  }

  return (
    <div className='report'>

      <div className='report-content'>

        <OfficerDetailsContent formData={formData} setFormData={setFormData} />

        <Button onClick={back}>BACK</Button>
        <Button className='report-button' onClick={next}>NEXT</Button>

      </div>

    </div>
  );
}

export default OfficerDetails;
