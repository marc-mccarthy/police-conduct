import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function ViewReports() {
  const reports = useSelector((store) => store.reports);
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch({ type: 'FETCH_ALL_REPORTS' });
  }, []);
  const gearR = (id) => {
      history.push(`/reports/${id}`)
  }

  return (
    <div className="container">
      {reports.length == 0 ? (
        <h3>Heaviy Loading...</h3>
      ) : (
      <div>
        <h3>All Reports :</h3>
        <p>All Reports will be here!</p>

        <div className='ReportList'>
          {reports.map(eachReport => {
            return (
              <div className='ReportItem' key={eachReport.id} >
                <h3>{eachReport.id}</h3>
                <p>{eachReport.interaction_date}</p>
                <p>{eachReport.interaction_summary}</p>
                <button onClick={() => gearR(eachReport.id)}>Details</button>
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
