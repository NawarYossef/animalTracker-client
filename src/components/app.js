import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { refreshAuthToken } from "../actions/auth";

import LandingPage from "./pages/landing-page";
import DashboardPage from "./pages/dashboard-page";
import AnimalPage from "./pages/animal-page";
import NewAnimalPage from "./pages/new-animal-page";
import AccountPage from "./pages/account-page";
import RegistrationPage from "./pages/registration-page";

import AnimalNavbar from "pages/animal-components/animal-navbar";
import Behavior from "./pages/animal-components/behavior";
import Record from "./pages/animal-components/record";
import DietAndMedication from "./pages/animal-components/diet-medication";
import Chart from "./pages/animal-components/chart";

import HeaderNavbar from "./header-navbar";

export class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && !this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (!nextProps.loggedIn && this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div className="app">
        <HeaderNavbar />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/new-animal" component={NewAnimalPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/animal/:id" component={AnimalPage} />
        <Route exact path="/account" component={AccountPage} />
        <Route exact path="/register" component={RegistrationPage} />
        <Route exact path="/animal/:id/behavior" component={Behavior} />
        <Route exact path="/animal/:id/record" component={Record} />
        <Route exact path="/animal/:id/diet-medication" component={DietAndMedication} />
        <Route exact path="/animal/:id/chart" component={Chart} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
