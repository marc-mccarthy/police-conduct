import React from 'react';
import { useSelector } from 'react-redux';

import { Checkbox } from '@mui/material';
import { useEffect } from 'react';

function StartContent({ formData, setFormData }) {

  const start = useSelector(store => store.startReducer);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    // if start reducer is filled, setFormData (anonymous, publicReport, understand, verification) to reducer data. we do this so the checked prop in the MUI checkbox behaves appropriately
    if (Object.keys(start).length > 0) {
      setFormData({
        ...formData,
        anonymous: start.anonymous,
        publicReport: start.public,
        understand: start.handle_info,
        verification: start.verification,
      })
    }
  }, [start])

  const handleAnonymous = () => {
    setFormData({
      ...formData,
      anonymous: !formData.anonymous,
      email: '',
      first: '',
      last: '',
      phone: '',
    })
  }

  const handleEmail = (e) => {
    setFormData({
      ...formData,
      email: e.target.value
    })
  }

  const handleFirst = (e) => {
    setFormData({
      ...formData,
      first: e.target.value
    })
  }

  const handleLast = (e) => {
    setFormData({
      ...formData,
      last: e.target.value
    })
  }

  const handlePhone = (e) => {
    setFormData({
      ...formData,
      phone: e.target.value
    })
  }

  const handlePublicReport = () => {
    setFormData({
      ...formData,
      publicReport: !formData.publicReport
    })
  }

  const handleUnderstand = () => {
    setFormData({
      ...formData,
      understand: !formData.understand
    })
  }

  const handleVerification = () => {
    setFormData({
      ...formData,
      verification: !formData.verification
    })
  }

  return (
    <>

      <h2>Report Form</h2>

      <h3>Accessibility</h3>
      <p>If you need help completing this form, please email help@policeconduct.org</p>

      <h3>Anonymous</h3>
      <p><Checkbox sx={{ p: 0 }} onChange={handleAnonymous} checked={formData.anonymous} /> Check this box if you want your report to be filed anonymously.</p>

      {
        formData.anonymous ?
          <> </>
          :
          <span>
            <p>First name:</p>
            <input type='text' className='report-input' onChange={handleFirst} defaultValue={start.reporter_first} />

            <p>Last name:</p>
            <input type='text' className='report-input' onChange={handleLast} defaultValue={start.reporter_last} />

            <p>Email:</p>
            <input type='text' className='report-input' onChange={handleEmail} defaultValue={start.reporter_email} />

            <p>Phone number:</p>
            <input type='text' className='report-input' onChange={handlePhone} defaultValue={start.reporter_phone} />
          </span>
      }

      <h3>Public</h3>
      <p><Checkbox sx={{ p: 0 }} onChange={handlePublicReport} checked={formData.publicReport} /> Check this box if you want your report to be public. (Your personal details will not be shared, only your username.)</p>

      <h3>Verification</h3>
      <p><Checkbox sx={{ p: 0 }} onChange={handleVerification} checked={formData.verification} /> *Check this box signifying you are NOT submitting this form on behalf of someone else. (*Required)</p>

      <h3>How we handle your information</h3>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      <p><Checkbox sx={{ p: 0 }} onChange={handleUnderstand} checked={formData.understand} /> *I understand how you handle my information. (*Required) </p>

    </>
  );
}

export default StartContent;