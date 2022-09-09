import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import './Profile.css';

function Profile() {
  const allReports = useSelector((store) => store.allUserReport);
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_REPORTS' });
    dispatch({ type: 'ALL_USER_REPORTS', payload: user.id });

  }, []);
  const details = (id) => {
    history.push(`/reports/${id}`);
  };

  return (
    <div className="container">
      {allReports.length == 0 ? (
        <Box mt={25} display="flex" justifyContent="center" alignItems="center">
          <h1>{user.username} Has No Reports</h1>
        </Box>
      ) : (
        <div>
          <h2>{user.username}'s Reports :</h2>
          <div className="ProfileReportList">
            {allReports.map((eachReport) => {
              return (
                eachReport.userID == user.id && (
                  <div className="ProfileReportItem" key={eachReport.id}>
                    <h3>Report # {eachReport.id}</h3>
                    <p>{eachReport.reporter_first}</p>
                    <p>Date: {eachReport.interaction_date.substring(0, 10)}</p>
                    <p>{eachReport.interaction_summary.substring(0, 30)}...</p>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => details(eachReport.id)}
                    >
                      Details
                    </Button>
                  </div>
                )
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
