import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./nav.css";
import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local-storage";

export function Navbar(props) {
  function logOut() {
    props.dispatch(clearAuth());
    clearAuthToken();
  }

  let links = [];
  if (props.loggedIn) {
    links = [
      <button onClick={() => logOut()}>Log out</button>,
      <Link to="/dashboard">Dashboard</Link>
    ];
  } else {
    links = [<Link to="/register">Register</Link>];
  }
  return (
    <div className="navbar">
      <p>this is the nav {links}</p>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);
