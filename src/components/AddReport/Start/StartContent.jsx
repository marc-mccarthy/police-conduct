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
        // ...formData,
        anonymous: start.anonymous,
        email: start.reporter_email,
        first: start.reporter_first,
        last: start.reporter_last,
        phone: start.reporter_phone,
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
            <input type='text' className='report-input' onChange={handleFirst} defaultValue={formData.first} />

            <p>Last name:</p>
            <input type='text' className='report-input' onChange={handleLast} defaultValue={formData.last} />

            <p>Email:</p>
            <input type='text' className='report-input' onChange={handleEmail} defaultValue={formData.email} />

            <p>Phone number:</p>
            <input type='text' className='report-input' onChange={handlePhone} defaultValue={formData.phone} />
          </span>
      }

      <h3>Public</h3>
      <p><Checkbox sx={{ p: 0 }} onChange={handlePublicReport} checked={formData.publicReport} /> Check this box if you want your report to be public. (Your personal details will not be shared, only your username.)</p>

      <h3>Verification</h3>
      <p><Checkbox sx={{ p: 0 }} onChange={handleVerification} checked={formData.verification} /> *Check this box signifying you are NOT submitting this form on behalf of someone else. (*Required)</p>

      <h3>How we handle your information</h3>
      <p>By submitting this form, we will automatically send your report to the correct Internal Affairs office. Any information you elect to include in the form will be passed along. If you complete this form as a guest, you will not be able to edit the report once it is submitted. If you complete this form as a logged in user, your submitted report will be available to you in your Profile page, where you are able to edit or delete your report. If you choose to make your report public, it will be viewable by anyone in the View Reports page. All reports are saved in a database but will not be shared or made public unless determined by the individual user.</p>
      <p><Checkbox sx={{ p: 0 }} onChange={handleUnderstand} checked={formData.understand} /> *I understand how you handle my information. (*Required) </p>

    </>
  );
}

export default StartContent;