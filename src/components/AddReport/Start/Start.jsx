import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {Button, Checkbox, FormControlLabel} from '@mui/material';


function Start() {



  return (
    <div className='report'>
      <h2 className='report-form'>Report Form</h2>
      <div className='report-content'>

        <h3>Accessability</h3>
        <p>If you need help completing this form, please email dale.lotts@gmail.com</p>

        <h3>Anonymous</h3>
        {/* <FormControlLabel label="Check this box if you want your report to be filled anonymously" control={<Checkbox />} labelPlacement="right" /> */}
        <p><Checkbox /> Check this box if you want your report to be filled anonymously</p>

        <p>First name:</p>
        <input className='report-input'/>

        <p>Last name:</p>
        <input className='report-input'/>

        <p>Email:</p>
        <input className='report-input'/>

        <p>Phone number:</p>
        <input className='report-input'/>

        <h3>Public</h3>
        <p><Checkbox /> Check this box if you want your report to be public</p>

        <h3>Verification</h3>
        <p><Checkbox /> Check this box signifying you are NOT submitting this form on behalf of someone else</p>

        <h3>How we handle your information</h3>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <p><Checkbox /> I understand</p>

        <Button className='report-button'>NEXT</Button>

      </div>
    </div>
  );
}

export default Start;
