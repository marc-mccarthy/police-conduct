import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import './ProgressBar.css';
import Grid from '@mui/material/Grid';
import { useLocation } from 'react-router-dom';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function TemplateFunction(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const location = useLocation();
  const [displayBar, setDisplayBar] = useState(false);

  const startToFinish = [
    'Start', 
    'Officer Details', 
    'Interaction Details', 
    'Description', 
    'Outcomes', 
    'Review', 
    'Done'
  ];

  const currentRoute = location.pathname;

  const progressBarPages = [
    '/start', 
    // '/officer-details', 
    // '/interaction-details', 
    // '/description', 
    // '/outcomes', 
    // '/review', 
    // '/done'
  ]

  const routeCheck = () => {
    if(currentRoute = progressBarPages){
      setDisplayBar(true)
    }
  }

  // const changeColor = () => {

  // }

  return (
    <Grid container spacing={3} justifyContent='space-evenly' direction='row' alignItems='center' columns={7}>
      {startToFinish.map(eachStep => {
        return (
          <Grid item xs>
            <item>{eachStep}</item>
          </Grid>
          )
      })}
    </Grid>
    )
}

export default TemplateFunction;
