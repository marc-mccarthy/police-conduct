import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Box, Typography} from '@mui/material';
import './Page404.css';
const cautionTape=require('../../images/caution-tape.jpg');

function Page404() {
  const history=useHistory();
  const [heading, setHeading]=useState('404: Page Not Found');

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box mt={5}>
        <Typography variant="h3">{heading}</Typography>
      </Box>
      <Box m={3}>
        <Typography variant="h4">Well, this is tough...</Typography>
      </Box>
      <Box>
        <img id="img404" src={cautionTape} alt="caution tape" />
      </Box>
    </Box>
  );
}

export default Page404;
