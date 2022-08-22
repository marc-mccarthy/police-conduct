import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Start from '../AddReport/Start/Start';
import OfficerDetails from '../AddReport/OfficerDetails/OfficerDetails';
import InteractionDetails from '../AddReport/InteractionDetails/InteractionDetails';
import InteractionSummary from '../AddReport/InteractionSummary/InteractionSummary';
import Outcomes from '../AddReport/Outcomes/Outcomes';
import Review from '../AddReport/Review/Review';
import Submitted from '../AddReport/Submitted/Submitted';

import './App.css';
import SideBar from '../SideBar/SideBar';
import LogOutRoute from '../LogOutRoute/LogOutRoute';
import Profile from '../Profile/Profile';
import GuestProfile from '../GuestProfile/GuestProfile';
import ViewReports from '../ViewReports/ViewReports';
import Page404 from '../Page404/Page404';
import ReportDetails from '../ReportDetails/ReportDetails';


function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/login" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          <Route
            // shows guestProfile at all times (logged in or not)
            exact
            path="/guestProfile"
          >
            <GuestProfile />
          </Route>

          <Route
            // shows guestProfile at all times (logged in or not)
            exact
            path="/reports/:id"
          >
            <ReportDetails />
          </Route>


          <Route
            // shows guestProfile at all times (logged in or not)
            exact
            path="/start"
          >
            <Start />
          </Route>

          <Route
            // shows guestProfile at all times (logged in or not)
            exact
            path="/officer-details"
          >
            <OfficerDetails />
          </Route>

          <Route
            // shows guestProfile at all times (logged in or not)
            exact
            path="/interaction-details"
          >
            <InteractionDetails />
          </Route>

          <Route
            // shows guestProfile at all times (logged in or not)
            exact
            path="/interaction-summary"
          >
            <InteractionSummary />
          </Route>

          <Route
            // shows guestProfile at all times (logged in or not)
            exact
            path="/outcomes"
          >
            <Outcomes />
          </Route>

          <Route
            // shows guestProfile at all times (logged in or not)
            exact
            path="/review"
          >
            <Review />
          </Route>

          <Route
            // shows guestProfile at all times (logged in or not)
            exact
            path="/submitted"
          >
            <Submitted />
          </Route>

          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/viewReports"
          >
            <ViewReports />
          </Route>


          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <Route
            // logged in shows UserPage else shows LoginPage
            exact
            path="/home"
          >
            <LandingPage />
          </Route>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          {/* <ProtectedRoute

            // logged in shows Add Report (Start) else shows LoginPage
            exact
            path="/start"
          >
            <Start />
          </ProtectedRoute> */}

          {/* <ProtectedRoute
            // logged in shows Add Report (Officer Details) else shows LoginPage
            exact
            path="/officer-details"
          >
            <OfficerDetails />
          </ProtectedRoute> */}

          <ProtectedRoute
            exact
            path="/logout"
          >
            <LogOutRoute />
          </ProtectedRoute>



          <Route
            exact
            path="/login"
          >
            {user.id ?





              // If the user is already logged in,
              // redirect to the /home page
              <Redirect to="/home" />

              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/home" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/home" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <Route
            exact
            path="/profile"
          >
            {!user.id ?
              // If the user is not logged in,
              // redirect them to the /guestUser page
              <Redirect to="/guestProfile" />
              :
              // Otherwise, show the Profile page
              <Profile />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <Page404 />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
