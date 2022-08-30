import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function LogOutRoute() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (user.id){
    dispatch({ type: 'LOGOUT' })
    history.push('/profile');
    }else{
      history.push('/');
    }
  }, [])
  return (
    <div className="container">
    </div>
  );
}
export default LogOutRoute;
