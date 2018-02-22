import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

export function NewAnimalPage(props) {
  return (
    <div className="add-animal">
      <h2>This is the animal page</h2>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NewAnimalPage);
