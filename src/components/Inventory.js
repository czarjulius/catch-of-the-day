import React, { Component } from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import PropTypes from "prop-types";
import Login from "./Login";
import firebase from "firebase";
import { firebaseApp } from "../base";

class Inventory extends Component {
  static propTypes = {
    fishes: PropTypes.array,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    laodSampleFishes: PropTypes.func
  };

  authHandler = async authData => {};

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  render() {
    // return <Login authenticate={this.authenticate}/>
    return (
      <div className="Inventory">
        <h2>Inventory!!!</h2>
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.laodSampleFishes}>
          {" "}
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
