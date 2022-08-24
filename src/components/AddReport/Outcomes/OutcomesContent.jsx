import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { useEffect } from 'react';

function OutcomesContent({ formData, setFormData }) {

  const outcomes = useSelector(store => store.outcomesReducer);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    if (Object.keys(outcomes).length > 0) {
      setFormData({
        outcomes: outcomes.report_outcomes
      })
    }
  }, [outcomes])

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
      <textarea className='report-input' rows="20" onChange={handleOutcomes} defaultValue={outcomes.report_outcomes}/>

    </>
  );
}

export default OutcomesContent;
