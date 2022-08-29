import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
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
        <div>
          <Box
            mt={25}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <h1>No Reports in PoliceConduct.org</h1>
          </Box>
        </div>
      ) : (
        <div>
          <h2>All Reports :</h2>

          <div className="ProfileReportList">
            {reports.map((eachReport) => {
              return (
                <div className="ReportItem" key={eachReport.id}>
                  <h3>Report # {eachReport.id}</h3>
                  <p>{eachReport.reporter_first}</p>
                  {
                    eachReport.interaction_date === null ?
                    <></>
                    :
                  <p>Date: {eachReport.interaction_date.substring(0, 10)}</p>
                  }
                  {/* <p>Date: {eachReport.interaction_date.substring(0, 10)}</p> */}
                  <p>{eachReport.interaction_summary.substring(0, 30)}...</p>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => details(eachReport.id)}
                  >
                    Details
                  </Button>
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
