import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { useEffect } from 'react';

function OutcomesContent({ formData, setFormData }) {

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleOutcomes = (e) => {
    setFormData({
      ...formData,
      outcomes: e.target.value
    })
  }

  return (
    <>
      <h2>Outcomes</h2>

      <p>What, if anything, would you like to happen as a result of your report?</p>
      <p>(We cannot guarantee that your desired outcome will happen.)</p>
      <textarea className='report-input' rows="20" onChange={handleOutcomes} />

    </>
  );
}

export default OutcomesContent;
