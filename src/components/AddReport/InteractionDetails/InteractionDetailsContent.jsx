import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function InteractionDetailsContent({ formData, setFormData }) {

  const interactionDetails = useSelector(store => store.interactionDetailsReducer);

  useEffect(() => {
  }, [formData]);

  // this useEffect allows us to go back, forward, and back again and the defaultValue will stay correct
  useEffect(() => {
    if (Object.keys(interactionDetails).length > 0) {
      setFormData({
        interactionDate: interactionDetails.interaction_date,
        interactionTime: interactionDetails.interaction_time,
        interactionLocation: interactionDetails.interaction_location,
        referenceNumber: interactionDetails.reference_number,
      })
    }
  }, [interactionDetails])

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

      <p>*Date of interaction (*Required):</p>
      <input className='report-input' type="date" onChange={handleDate} defaultValue={formData.interactionDate} />

      <p>*Time of interaction (*Required):</p>
      <input type='time' className='report-input' onChange={handleTime} defaultValue={formData.interactionTime} />

      <p>Location of interaction:</p>
      <input type='text' className='report-input' onChange={handleLocation} defaultValue={formData.interactionLocation} />

      <p>Incident reference number (if you have one):</p>
      <input type='text' className='report-input' onChange={handleReferenceNumber} defaultValue={formData.referenceNumber} />

    </>
  );
}

export default InteractionDetailsContent;
