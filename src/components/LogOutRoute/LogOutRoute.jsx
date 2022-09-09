import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

function LogOutRoute() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'LOGOUT' })
    history.push('/profile');
  }, [])
  return (
    <div className="container">
    </div>
  );
}
export default LogOutRoute;
