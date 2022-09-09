import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const history = useHistory();

  const toViewReports = () => {
    history.push('/viewReports');
  };

  const addUserReport = () => {
    history.push('/start');
  };

  return (
    <div>
      <div className="landing">
          <div className="viewReports" onClick={toViewReports}>
            <h1>View Reports</h1>
          </div>

          <div className="addReports" onClick={addUserReport}>
            <h1>Add Report</h1></div>
          </div>
    </div>
  );
}

export default LandingPage;
