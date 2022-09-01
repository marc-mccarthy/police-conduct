import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Box, Grid, Stack, Button } from "@mui/material";
import LoadingBar from "../LoadingBar/LoadingBar";
import "./ReportDetails.css";

function ReportDetails() {
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const reports = useSelector((store) => store.eachReport);
  let { id } = useParams();

  useEffect(() => {
    dispatch({ type: "EACH_USER_REPORT", payload: id });
  }, []);

  const back = () => {
    history.goBack() // https://stackoverflow.com/questions/39288915/detect-previous-path-in-react-router
  }

  const delete_Report = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete this report? This action cannot be undone!"
      )
    ) {
      dispatch({ type: "DELETE_REPORT", payload: id });
      setTimeout(function () {
        history.push("/profile");
      }, 1);
    }
  };

  const edit_Report = () => {
    history.push(`/edit/${id}`)
  };

  const upDel = () => {
    if (user.id === reports[0].userID) {
      return (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box m={1}>
            <Button onClick={back}>
              Back
            </Button>
          </Box>
          <Box m={1}>
            <Button color="error" onClick={delete_Report}>
              Delete
            </Button>
          </Box>
          <Box m={1}>
            <Button onClick={edit_Report} color="secondary">Edit</Button>
          </Box>
        </Grid>
      );
    } else {
      return (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box mr={1}>
            <Button onClick={back}>
              Back
            </Button>
          </Box>
        </Grid>
      )
    }
  };

  return (
    <div className="ReportDetails">
      {reports.length === 0 ? (
        <div>
          <h1 className="spinner"></h1>
        </div>
      ) : (
        <div className="ReportItem">
          <div key={reports.id}>
            <h3>Report #{reports[0].id}</h3>
            <p>
              <b>Officer: </b>
              {reports[0].officer_first} {reports[0].officer_last}
            </p>
            <p>
              <b>Rank: </b>
              {reports[0].officer_rank}
            </p>
            <p>
              <b>Badge #: </b>
              {reports[0].officer_badge}
            </p>
            <p>
              <b>Department: </b>
              {reports[0].officer_department}
            </p>
            {reports[0].interaction_date === null ? (
              <p>Date: </p>
            ) : (
              <p>
                <b>Date: </b>
                {reports[0].interaction_date.substring(0, 10)}
              </p>
            )}
            {/* <p>Date: {reports[0].interaction_date.substring(0, 10)}</p> */}
            <p>
              <b>Time: </b>
              {reports[0].interaction_time}
            </p>
            <p>
              <b>Location: </b>
              {reports[0].interaction_location}
            </p>
            <p>
              <b>Ref. #: </b>
              {reports[0].reference_number}
            </p>
            <p>
              <b>Report Summary: </b>
              {reports[0].interaction_summary}
            </p>
            <p>
              <b>Desired Outcomes: </b>
              {reports[0].report_outcomes}
            </p>
          </div>
          <div>{upDel()}</div>
        </div>
      )}
    </div>
  );
}

export default ReportDetails;
