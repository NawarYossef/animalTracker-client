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
      <Link to="/dashboard">DASHBOARD</Link>,
      <Link to="/new-animal">NEW ANIMAL</Link>,
      <Link to="/account">ACCOUNT</Link>,
      <button onClick={() => logOut()}>Log out</button>
    ];
  } else {
    links = [<Link to="/register">Register</Link>];
  }
  return (
    <header className=" col-12">
      <div className="col-6 app-title-wrapper">
        <h1>AnimalTracker</h1>
      </div>
      <nav className="navbar col-6">
        <ul>
          {links.map(link => {
            return <li>{link}</li>;
          })}
        </ul>
      </nav>
    </header>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);
