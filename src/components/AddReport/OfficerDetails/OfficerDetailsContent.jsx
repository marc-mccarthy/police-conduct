import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { useEffect } from 'react';

function OfficerDetailsContent({ formData, setFormData }) {

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleOfficerAnything = (e) => {
    setFormData({
      ...formData,
      officerAnything: e.target.value
    })
  };

  const handleOfficerBadge = (e) => {
    setFormData({
      ...formData,
      officerBadge: e.target.value
    })
  };

  const handleOfficerDept = (e) => {
    setFormData({
      ...formData,
      officerDept: e.target.value
    })
  };

  const handleOfficerFirst = (e) => {
    setFormData({
      ...formData,
      officerFirst: e.target.value
    })
  };

  const handleOfficerLast = (e) => {
    setFormData({
      ...formData,
      officerLast: e.target.value
    })
  };

  const handleOfficerRank = (e) => {
    setFormData({
      ...formData,
      officerRank: e.target.value
    })
  };

  return (
    <>

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

    </>
  );
}

export default OfficerDetailsContent;
