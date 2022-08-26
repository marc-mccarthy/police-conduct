import React from 'react';

function GuestProfile() {

  return (
    <div className="container">
      <h2>Welcome!</h2>
      <p>You are not currently logged in.</p>
      <p>If you want to save, edit, or delete your reports, you must <a href='#/registration'>Create account</a> or <a href='#/login'>Log In</a> </p>
        <p>To continue adding a report without an account <a href='#/start'>Click here</a> </p>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default GuestProfile;
