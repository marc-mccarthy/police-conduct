import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { useEffect } from 'react';

function InteractionDetailsContent({formData, setFormData}) {

  useEffect(() => {
    console.log(formData);
  }, [formData]);


  const handleDate = (e) => {
    setFormData({
      ...formData,
      interactionDate: e.target.value
    })
  };

  const handleLocation = (e) => {
    setFormData({
      ...formData,
      interactionLocation: e.target.value
    })
  };

  const handleTime = (e) => {
    setFormData({
      ...formData,
      interactionTime: e.target.value
    })
  };

  const handleReferenceNumber = (e) => {
    setFormData({
      ...formData,
      referenceNumber: e.target.value
    })
  };

  return (
    <>
      <h2>Interaction Details</h2>

      <p>Date of interaction:</p>
      <input className='report-input' type="date" onChange={handleDate} />

      <p>Time of interaction:</p>
      <input type='text' className='report-input' onChange={handleLocation} />

      <p>Location of interaction:</p>
      <input type='text' className='report-input' onChange={handleTime} />

      <p>Incident reference number (if you have one):</p>
      <input type='text' className='report-input' onChange={handleReferenceNumber} />

    </>
  );
}

export default InteractionDetailsContent;
