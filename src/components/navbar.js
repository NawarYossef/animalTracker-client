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
    <header className="navbar">
      <nav>
        <ul>
          {links.map(link => {
            return <li>{link}</li>
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
