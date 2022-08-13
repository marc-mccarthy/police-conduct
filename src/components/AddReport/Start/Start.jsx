import React, { useState } from 'react';
import { useSelector } from 'react-redux';


function Start(props) {



  return (
    <div className='report'>
      <h2 className='report-form'>Report Form</h2>
      <div className='report-content'>

        <h3>Accessability</h3>
        <p>If you need help completing this form, please email dale.lotts@gmail.com</p>

        <h3>Anonymous</h3>
        <p>Check this box if you want your report to be filled anonymously</p>

        <p>First name:</p>
        <input className='report-input'/>

        <p>Last name:</p>
        <input className='report-input'/>

        <p>Email:</p>
        <input className='report-input'/>

        <p>Phone number:</p>
        <input className='report-input'/>

      </div>
    </div>
  );
}

export default Start;
