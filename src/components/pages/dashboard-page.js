import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import { fetchProtectedData } from "../../actions/protected-data";

export class DashboardPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
      <div className="dashboard">
        THIS IS THE DASHBOARD
        <div className="dashboard-username">
          Username: {this.props.username}
        </div>
        <div className="dashboard-name">Name: {this.props.name}</div>
        <div className="dashboard-protected-data">
          Protected data: {this.props.protectedData}
        </div>
        {/*
        <div className="all-animal;s">
          <Animal name="asd" age="asd" />
          <Animal name="asd" age="asd" />
          <Animal name="asd" age="asd" /> square animgal image 
          <Animal name="asd" age="asd" />
        </div>
      */}
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
