import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  auth,
  createCreateUserProfileDocument,
} from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createCreateUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {}
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with email and password</span>
        <form
          className="sign-up-forn"
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <FormInput
            type="text"
            value={displayName}
            label="Display Name"
            name="displayName"
            handleChange={(event) => this.handleChange(event)}
            required
          />
          <FormInput
            type="email"
            value={email}
            label="Email"
            name="email"
            handleChange={(event) => this.handleChange(event)}
            required
          />
          <FormInput
            type="password"
            value={password}
            label="Password"
            name="password"
            handleChange={(event) => this.handleChange(event)}
            required
          />
          <FormInput
            type="text"
            value={confirmPassword}
            label="Confirm Password"
            name="confirmPassword"
            handleChange={(event) => this.handleChange(event)}
            required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
