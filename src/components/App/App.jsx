import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
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
import LogOutRoute from '../LogOutRoute/LogOutRoute';
import Profile from '../Profile/Profile';
import GuestProfile from '../GuestProfile/GuestProfile';
import ViewReports from '../ViewReports/ViewReports';
import Page404 from '../Page404/Page404';
import ReportDetails from '../ReportDetails/ReportDetails';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#304FFE'
      },
      secondary: {
        main: '#18BC7E',
        contrastText: "#fff"
      },
      text: {
        disabled: '#00000' //https://newdevzone.com/posts/material-ui-how-to-change-the-colour-of-a-disabled-textfield
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'contained',
          size: 'small',
        },
        styleOverrides: {
          root: {
            marginTop: '1rem'
          }
        }
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/login" />

            <Route
              // shows guestProfile at all times (logged in or not)
              exact
              path="/guestProfile"
            >
              {user.id ?
                // If the user is logged in,
                // redirect them to the /profile page
                <Redirect to="/profile" />
                :
                // Otherwise, show the Profile page
                <GuestProfile />
              }
            </Route>

            <Route
              // shows guestProfile at all times (logged in or not)
              exact
              path="/reports/:id"
            >
              <ReportDetails />
            </Route>

            <ProtectedRoute
              // logged in shows Review Page else shows LoginPage
              exact
              path="/edit/:id"
            >
              <Review />
            </ProtectedRoute>

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

            <Route
              // logged in shows UserPage else shows LoginPage
              exact
              path="/logout"
            >
              <LogOutRoute />

            </Route>

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
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
