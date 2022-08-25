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
      page:'Description',
      path:'/description'
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
      page:'Done',
      path:'/done'
    }
  ];

  const currentPage = location.pathname;

  const Other = styled(Paper)(({theme})=>({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: '5px',
    textAlign: 'center',
    color: '#000000',
    fontSize: '14px',
  }));

  const Current = styled(Paper)(({theme})=>({
    backgroundColor: '#0000FF',
    ...theme.typography.body2,
    padding: '15px',
    textAlign: 'center',
    color: '#fff',
    fontSize: '20px'
  }));

  return (
    <Grid container spacing={3} justifyContent='space-evenly' direction='row' alignItems='center' columns={7}>
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