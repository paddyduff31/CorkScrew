import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import './App.css';
import setAuthToken from './utils/setAuthToken'
import Navbar from './Component/layout/Navbar';
import Landing from './Component/layout/Landing';
import Login from './Component/auth/Login';
import Register from './Component/auth/Register';
import Alert from './Component/layout/Alert';
import Dashboard from './Component/dashboard/Dashboard'
import Tills from './Component/tills/Tills.js'
import PrivateRoute from './Component/routing/PrivateRoue'
import CreateProfile from './Component/profile-forms/CreateProfile'
import EditProfile from './Component/profile-forms/EditProfile'

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/create-profile' component={CreateProfile} />
              <PrivateRoute exact path='/edit-profile' component={EditProfile} />
              <PrivateRoute exact path='/tills' component={Tills} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
