import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import './LoginPage.css'

function LoginPage() {
  const history = useHistory();

  return (
    <div className='container'>
      <LoginForm />

      <center>
        {/* <h4>What if I do not have an account?</h4> */}
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Click Here To Create An Account
        </button>
      </center>
    </div>
  );
}

export default LoginPage;
