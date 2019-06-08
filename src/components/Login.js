import React from "react";
import PropType from "prop-types";

const Login = props => (
  <nav className="login">
    <h2> Inventory Login</h2>
    <p>Sign in to manage your store's Inventory</p>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Log In With Github
    </button>

    <button className="facebook" onClick={() => props.authenticate("Facebook")}>
      Log In With Facebook
    </button>
  </nav>
);

Login.propType = {
  authenticate: PropType.func.isRequired
};

export default Login;
