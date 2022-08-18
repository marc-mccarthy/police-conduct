import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import './RegisterPage.css';

function RegisterPage() {
  const history = useHistory();

  return (
    <div className='container'>
      <RegisterForm />

      <center>
        <h4>I already have an account.</h4>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
         Click Here To Login
        </button>
      </center>
    </div>
  );
}

export default RegisterPage;
