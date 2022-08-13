import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {TextField} from '@mui/material';


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
      <TextField onChange={handleReportChange} placeholder='something' type="text"/>
      {/* (TextField is MUI's input) */}
    </div>
  );
}

export default ReportInput;
