import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Route, withRouter } from "react-router-dom";
import AnimalNavbar from "./animal-navbar";

export function AnimalProfile(props) {
  return (
    <div className=" col-12">
      <AnimalNavbar />
      <h2>Animal Profile</h2>
      <form>
        <label>
          <h3>Name</h3>
          <input type="text" name="name" />
        </label>
        <label>
          <h3>SPECIES</h3>
          <input type="text" name="species" />
        </label>
        <label>
          <h3>BREED</h3>
          <input type="text" name="breed" />
        </label>
        <label>
          <h3>DATE RECEIVED</h3>
          <input type="date" name="date" />
        </label>
        <label>
          <h3>APPROXIMATE AGE</h3>
          <input type="date" name="age" />
        </label>
        <input type="submit" value="Submit" className="submit-button" />
      </form>
    </div>
  );
}

export default connect()(AnimalProfile);
