import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "../styles/animal-navbar.css";
import { clearAuth } from "../../../actions/auth";
import { clearAuthToken } from "../../../local-storage";

export function AnimalNavbar(props) {
  function logOut() {
    props.dispatch(clearAuth());
    clearAuthToken();
  }

  let links = [];
  if (props.loggedIn) {
    links = [
      <Link to="/animal/123/chart" className="animal-link">CHART</Link>,
      <Link to="/animal/123/behavior" className="animal-link">BEHAVIOR</Link>,
      <Link to="/animal/123/animal-profile" className="animal-link">ANIMAL PROFILE</Link>,
      <Link to="/animal/123/assessment" className="animal-link">ASSESSMENT</Link>
    ];
  } 
  return (
    <div className="nav-wrapper col-12">
      <nav className="navbar col-12">
        <ul>
          {links.map(link => {
            return <li className="animal-header-link">{link}</li>;
          })}
        </ul>
      </nav>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(AnimalNavbar);
