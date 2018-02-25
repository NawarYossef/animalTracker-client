import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import { fetchProtectedData } from "../../actions/protected-data";
import { Link, Redirect } from "react-router-dom";
import AnimalNavbar from "./animal-components/animal-navbar";

export class AnimalPage extends React.Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchProtectedData());
  // }

  render() {
    return (
      <div className="animal">
      <AnimalNavbar />
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

export default requiresLogin()(connect(mapStateToProps)(AnimalPage));
