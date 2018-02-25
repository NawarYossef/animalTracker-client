import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./styles/new-animal.css";

export class NewAnimalPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="add-animal col-12">
        <h2>New Animal</h2>
        <form>
          <label>
            <h3>PROFILE IMAGE</h3>
            <input type="file" name="pic" />
          </label>
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
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NewAnimalPage);
