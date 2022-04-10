import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
// import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
// import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import ListStuff from '../pages/ListStuff';
import ListStuffAdmin from '../pages/ListStuffAdmin';
import AddStuff from '../pages/AddStuff';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Dashboard from '../pages/Dashboard';
import PasswordGenerator from '../pages/PasswordGenerator';
import EditStuff from '../pages/EditStuff';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import Social from '../pages/Social';
import Entertainment from '../pages/Entertainment';
import Retail from '../pages/Retail';
import Misc from '../pages/Misc';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ height: '100vw' }}>
          <Grid style={{ width: '100vw', height: '100%' }}>
            <Grid.Column style={{ width: '30%' }}>
              <SideBar/>
            </Grid.Column>
            <Switch>
              <Grid.Column style={{ width: '70%', paddingTop: '40px', height: '100%' }}>
                <Route exact path="/" component={Landing}/>
                <Route path="/privacy-policy" component={PrivacyPolicy}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/signout" component={Signout}/>
                <ProtectedRoute path="/list" component={ListStuff}/>
                <ProtectedRoute path="/dashboard" component={Dashboard}/>
                <ProtectedRoute path="/add" component={AddStuff}/>
                <ProtectedRoute path="/edit/:_id" component={EditStuff}/>
                <ProtectedRoute path="/social" component={Social}/>
                <ProtectedRoute path="/entertainment" component={Entertainment}/>
                <ProtectedRoute path="/retail" component={Retail}/>
                <ProtectedRoute path="/misc" component={Misc}/>
                <ProtectedRoute path="/password-generator" component={PasswordGenerator}/>
                <AdminProtectedRoute path="/admin" component={ListStuffAdmin}/>
              </Grid.Column>
              <Route component={NotFound}/>
            </Switch>
          </Grid>
        </div>
      </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
        );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
      return (isLogged && isAdmin) ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
        );
    }}
  />
);

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

export default App;
