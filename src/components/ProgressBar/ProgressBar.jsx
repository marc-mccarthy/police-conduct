import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import './ProgressBar.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
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

  useEffect(()=>{
    // routeCheck;
    // console.log(currentRoute);
  })

  // displays addReport steps
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

  const progressBarRoutes = [
    '/start', 
    // '/officer-details', 
    // '/interaction-details', 
    // '/description', 
    // '/outcomes', 
    // '/review', 
    // '/done'
  ]

  const Item = styled(Paper)(({theme})=>({
    backgroundColor: theme.palette.mode === 'dark' ? 'blue' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid container spacing={3} justifyContent='space-evenly' direction='row' alignItems='center' columns={7}>
      {startToFinish.map(eachStep => {
        return (
          <Grid item xs='auto'>
            <Item>{eachStep}</Item>
          </Grid>
          )
      })}
    </Grid>
    )
}

export default TemplateFunction;
