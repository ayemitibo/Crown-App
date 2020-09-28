import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component.jsx";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={(event) => this.handleSubmit(event)}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            handleChange={(event) => this.handleChange(event)}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="Password"
            handleChange={(event) => this.handleChange(event)}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
