import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function OfficerDetailsContent({ formData, setFormData }) {

  const officerDetails = useSelector(store => store.officerDetailsReducer);

  useEffect(() => {
  }, [formData]);

  useEffect(() => {
    if (Object.keys(officerDetails).length > 0) {
      setFormData({
        officerFirst: officerDetails.officer_first,
        officerLast: officerDetails.officer_last,
        officerRank: officerDetails.officer_rank,
        officerBadge: officerDetails.officer_badge,
        officerDept: officerDetails.officer_department,
        officerAnything: officerDetails.officer_anythingelse,
      })
    }
  }, [officerDetails])

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
      officerFirst: e.target.value /* || officerDetails.officer_first */
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
      <input className='report-input' onChange={handleOfficerFirst} defaultValue={formData.officerFirst} />
      {/* this works now as well */}

      <p>Last name:</p>
      <input className='report-input' onChange={handleOfficerLast} defaultValue={formData.officerLast} />

      <p>Rank:</p>
      <input className='report-input' onChange={handleOfficerRank} defaultValue={formData.officerRank} />

      <p>Badge Number:</p>
      <input className='report-input' onChange={handleOfficerBadge} defaultValue={formData.officerBadge} />

      <p>Department:</p>
      <input className='report-input' onChange={handleOfficerDept} defaultValue={formData.officerDept} />

      <p>Is there anything else you can tell us to help identify this officer</p>
      <input className='report-input' onChange={handleOfficerAnything} defaultValue={formData.officerAnything} />

    </>
  );
}

export default OfficerDetailsContent;
