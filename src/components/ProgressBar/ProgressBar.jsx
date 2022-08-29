import React from 'react';
import {useSelector} from 'react-redux';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';

function ProgressBar(props) {
  const store = useSelector((store) => store);
  const location = useLocation();

  // displays addReport steps and their respective location.pathname
  const startToFinish = [
    {
      page:'Start',
      path:'/start'
    },
    {
      page:'Officer Details',
      path:'/officer-details'
    },

    {
      page:'Interaction Details',
      path:'/interaction-details'
    },
    {
      page:'Interaction Summary',
      path:'/interaction-summary'
    },
    {
      page:'Outcomes',
      path:'/outcomes'
    },
    { 
      page:'Review',
      path:'/review'
    },
    { 
      page:'Submitted',
      path:'/submitted'
    }
  ];

  const currentPage = location.pathname;

  const Other = styled(Paper)(({theme})=>({
    backgroundColor: '#000000',
    ...theme.typography.body2,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: '1rem',
    fontWeight: 'bold',
  }));

  const Current = styled(Paper)(({theme})=>({
    backgroundColor: '#000000',
    ...theme.typography.body2,
    textAlign: 'center',
    color: '#5FD855',
    fontSize: '1rem',
    fontWeight: 'bold',
  }));

  return (
    <Grid container spacing={1} justifyContent='space-evenly' direction='row' alignItems='center' columns={7} >
        {startToFinish.map(eachPage => {
          if(eachPage.path === currentPage){
            return (
              <Grid item xs='auto'>
                <Current>{eachPage.page}</Current>
              </Grid> 
            )
          }else {
            return (
              <Grid item xs='auto'>
                <Other>{eachPage.page}</Other>
              </Grid> 
            )
          }
        })}
    </Grid>
  )
}

export default ProgressBar;