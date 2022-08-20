import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import LoadingBar from '../LoadingBar/LoadingBar';

function ReportDetails() {
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const reports = useSelector((store) => store.eachReport);
  let { id } = useParams();

  useEffect(() => {
    dispatch({ type: 'EACH_USER_REPORT', payload: id });
  }, []);

  return (
    <div className="gear_page">
      {reports.length === 0 ? (
        <div>
          <h1 className="spinner"></h1>
        </div>
      ) : (
        <div className="ReportItem" key={reports.id}>
          <h3>Report # {reports[0].id}</h3>
          <p>
            Officer {reports[0].officer_first} {reports[0].officer_last}
          </p>
          <p>Rank: {reports[0].officer_rank}</p>
          <p>Badge # {reports[0].officer_badge}</p>
          <p>Department: {reports[0].officer_department}</p>
          <p>Date: {reports[0].interaction_date.substring(0, 10)}</p>
          <p>Time: {reports[0].interaction_time}</p>
          <p>Location: {reports[0].interaction_location}</p>
          <p>Ref # : {reports[0].reference_number}</p>
          <p>Report Summary: {reports[0].interaction_summary}</p>
          <p>Desired Outcomes: {reports[0].report_outcomes}</p>
        </div>
      )}
    </div>
  );
}

export default ReportDetails;
