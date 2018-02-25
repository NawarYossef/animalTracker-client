import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import { fetchProtectedData } from "../../actions/protected-data";
import { Link, Redirect, Route } from "react-router-dom";

import "./styles/dashboard-page.css";

export class DashboardPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
      <div className="dashboard">
        <p>THIS IS THE DASHBOARD</p>
        <div className="all-animal-links">
          <Link to="/animal/123" className="dashboard-link">
            Animal
          </Link>
          <Link to="/animal/123" className="dashboard-link">
            Animal
          </Link>
          <Link to="/animal/123" className="dashboard-link">
            Animal
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(DashboardPage));
