import React, { useState } from 'react';
import {useSelector} from 'react-redux';

import ReportInput from '../../ReportInput/ReportInput';

function Start(props) {

  const [report, setReport] = useState({
    test: '',
  })

  return (
    <div className='container'>
      <h2>Add Report (Start)</h2>
      <ReportInput report={report} setReport={setReport}/>
      <p>{report.test}</p>
    </div>
  );
}

export default Start;
