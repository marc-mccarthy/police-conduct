import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import StartContent from './StartContent';

function Start() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    anonymous: false,
    email: '',
    first: '',
    last: '',
    phone: '',
    publicReport: '',
    understand: false,
    verification: false
  });

  const next = () => {
    let newStart = {
      anonymous: formData.anonymous,
      public: formData.publicReport,
      verification: formData.verification,
      handle_info: formData.understand,
      reporter_first: formData.first,
      reporter_last: formData.last,
      reporter_email: formData.email,
      reporter_phone: formData.phone,
    };
    console.log(newStart);
    if(formData.understand === true && formData.verification === true) {
      dispatch({type: 'START_SAGA', payload: newStart});
      history.push('/officer-details');
    } else {
      alert('You must agree to the data handling and verification.');
    }
  }

  return (
    <div className='report'>

      <div className='report-content'>

        <StartContent formData={formData} setFormData={setFormData} />

        <Button className='report-button' onClick={next}>NEXT</Button>

      </div>

    </div>
  );
}

export default Start;
