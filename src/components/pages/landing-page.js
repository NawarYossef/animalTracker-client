import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./styles/landing-page.css";
import LoginForm from "./../login-form";

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <h2>Welcome to Foo App</h2>
      <p>this is the landing page!</p>
      <LoginForm />
      <Link to="/register">Register</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
