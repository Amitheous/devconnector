import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import AppNavbar from "./components/layout/AppNavbar";
import Footer from "./components/layout/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/layout/Landing";
import Dashboard from "./components/dashboard/Dashboard";

import "./App.css";
import { clearCurrentProfile } from "./actions/profileActions";

// Check for token
if (localStorage.jwt) {
  // Set auth token header
  setAuthToken(localStorage.jwt);
  // Decode token
  const decoded = jwt_decode(localStorage.jwt);
  // Set User
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
