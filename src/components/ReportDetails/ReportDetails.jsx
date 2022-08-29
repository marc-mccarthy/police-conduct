import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import LoadingBar from '../LoadingBar/LoadingBar';
import './ReportDetails.css';


function ReportDetails() {
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const reports = useSelector((store) => store.eachReport);
  let { id } = useParams();

  useEffect(() => {
    dispatch({ type: 'EACH_USER_REPORT', payload: id });
  }, []);

  const delete_Report = async () => {
    if (window.confirm("Are you sure you want to delete this report? This action cannot be undone!")) {
      dispatch({ type: "DELETE_REPORT", payload: id });
      setTimeout(function () {
        history.push("/profile");
      }, 1);
    }
  };

  const editDelete = () => {
    if (user.id === reports[0].userID) {
      return (
        <div>
          <Button color="error" onClick={delete_Report}>
            Delete
          </Button>
          <Button onClick={console.log('hello')}>
            Edit
          </Button>
        </div>
      );
    }
  };
// end of editDelete
  return (
    <div className="details_page">
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
          {
            reports[0].interaction_date === null ?
            <p>Date: </p>
            :
          <p>Date: {reports[0].interaction_date.substring(0, 10)}</p>
          }
          {/* <p>Date: {reports[0].interaction_date.substring(0, 10)}</p> */}
          <p>Time: {reports[0].interaction_time}</p>
          <p>Location: {reports[0].interaction_location}</p>
          <p>Ref # : {reports[0].reference_number}</p>
          <p>Report Summary: {reports[0].interaction_summary}</p>
          <p>Desired Outcomes: {reports[0].report_outcomes}</p>
          <div>{editDelete()}</div>

        </div>
      )}
    </div>
  );
}

export default ReportDetails;
