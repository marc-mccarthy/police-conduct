import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from '@mui/material';
import LoadingBar from '../LoadingBar/LoadingBar';

function ViewReports() {
  const reports = useSelector((store) => store.reports);
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_REPORTS' });
  }, []);
  const details = (id) => {
    history.push(`/reports/${id}`);
  };

  return (
    <div className="container">
      {reports.length == 0 ? (
        <Box mt={25} display="flex" justifyContent="center" alignItems="center">
          <LoadingBar />
        </Box>
      ) : (
        <div>
          <h2>All Reports :</h2>

          <div className="ReportList">
            {reports.map((eachReport) => {
              return (
                <div className="ReportItem" key={eachReport.id}>
                  <h3>Report # {eachReport.id}</h3>
                  <p>{eachReport.reporter_first}</p>
                  <p>Date: {eachReport.interaction_date.substring(0,10)}</p>
                  <p>{eachReport.interaction_summary.substring(0, 30)}...</p>
                  <button onClick={() => details(eachReport.id)}>Details</button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewReports;
