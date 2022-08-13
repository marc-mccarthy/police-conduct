import React, { useState } from 'react';
import {useSelector} from 'react-redux';


function ReportInput({report, setReport}) {

  const handleReportChange = (e) => {
    console.log(e.target.value);
    setReport({
      ...report,
      test: e.target.value
    });
  }

  return (
    <div>
      <input onChange={handleReportChange} placeholder='something' type="text"/>
      <button>NEXT</button>
    </div>
  );
}

export default ReportInput;
