import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local-storage";

import "./nav.css";

export function HeaderNavbar(props) {
  function logOut() {
    props.dispatch(clearAuth());
    clearAuthToken();
  }

  let links = [];
  if (props.loggedIn) {
    links = [
      <Link to="/dashboard" className="header-nav">DASHBOARD</Link>,
      <Link to="/new-animal" className="header-nav">NEW ANIMAL</Link>,
      <Link to="/account" className="header-nav">MY ACCOUNT</Link>,
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
      <nav className=" col-6">
        <ul>
          {links.map(link => {
            return <li className={"header-link"}>{link}</li>;
          })}
        </ul>
      </nav>
    </header>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderNavbar);

comments: [
  {
    id: 1234,
    comment: "some text"
  },
  
]
