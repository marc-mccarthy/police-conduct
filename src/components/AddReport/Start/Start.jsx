import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button, Checkbox } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Start() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [anonymous, setAnonymous] = useState(false);
  const [email, setEmail] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [phone, setPhone] = useState('');
  const [publicReport, setPublicReport] = useState(false);
  const [understand, setUnderstand] = useState(false);
  const [verification, setVerification] = useState(false);


  useEffect(() => {
    console.log(first, last, email, phone, publicReport, verification, understand);
  }, [first, last, email, phone, publicReport, verification, understand]);

  const handleAnonymous = () => {
    setAnonymous(!anonymous);
    setFirst('');
    setLast('');
    setEmail('');
    setPhone('');
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleFirst = (e) => {
    setFirst(e.target.value);
  }

  const handleLast = (e) => {
    setLast(e.target.value);
  }

  const handlePhone = (e) => {
    setPhone(e.target.value);
  }

  const handlePublicReport = () => {
    setPublicReport(!publicReport);
  }

  const handleUnderstand = () => {
    setUnderstand(!understand);
  }

  const handleVerification = () => {
    setVerification(!verification);
  }

  const next = () => {
    let newStart = {
      anonymous: anonymous,
      public: publicReport,
      verification: verification,
      handle_info: understand,
      reporter_first: first,
      reporter_last: last,
      reporter_email: email,
      reporter_phone: phone,
    };
    console.log(newStart);
    if(understand === true && verification === true) {
      dispatch({type: 'START_SAGA', payload: newStart});
      history.push('/officer-details');
    } else {
      alert('You must agree to the data handling and verification.');
    }
  }

  return (
    <div className='report'>

      <div className='report-content'>

        <h2>Report Form</h2>

        <h3>Accessibility</h3>
        <p>If you need help completing this form, please email help@policeconduct.org</p>

        <h3>Anonymous</h3>
        <p><Checkbox sx={{p:0}} onChange={handleAnonymous} /> Check this box if you want your report to be filed anonymously.</p>

        {
          anonymous ?
            <> </>
            :
            <span>
              <p>First name:</p>
              <input className='report-input' onChange={handleFirst} />

              <p>Last name:</p>
              <input className='report-input' onChange={handleLast} />

              <p>Email:</p>
              <input className='report-input' onChange={handleEmail} />

              <p>Phone number:</p>
              <input className='report-input' onChange={handlePhone} />
            </span>
        }

        <h3>Public</h3>
        <p><Checkbox sx={{p:0}} onChange={handlePublicReport}/> Check this box if you want your report to be public. (Your personal details will not be shared, only your username.)</p>

        <h3>Verification</h3>
        <p><Checkbox sx={{p:0}} onChange={handleVerification}/> *Check this box signifying you are NOT submitting this form on behalf of someone else. (*Required)</p>

        <h3>How we handle your information</h3>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <p><Checkbox sx={{p:0}} onChange={handleUnderstand}/> *I understand how you handle my information. (*Required) </p>

        <Button className='report-button' onClick={next}>NEXT</Button>

      </div>

    </div>
  );
}

export default Start;
