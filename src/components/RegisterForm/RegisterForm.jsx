import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  const goToLanding=()=>{
    history.push('/home');
  }

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        {/* <input className="userbtn" type="submit" name="submit" value="Register" /> */}
        <Button type="submit" name="submit">Register</Button>
        {/* <button className='guestbtn' type='button' onClick={goToLanding}>Continue as Guest</button> */}
        <Button onClick={goToLanding} color="secondary" className="continue--guest">Continue as Guest</Button>
      </div>
    </form>
  );
}

export default RegisterForm;
