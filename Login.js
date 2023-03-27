import React, { Component, createRef } from "react";

export default class UncontrolledLogin extends Component {
  formRef = createRef();

  state = {
    buttonClass: "login-button-disabled",
  };

  handleFrom = (e) => {
    e.preventDefault();
    const { username, password, remember } = this.formRef.current.elements;

    this.props.onLogin({
      username: username.value,
      password: password.value,
      remember: remember.checked ? true : false,
    });
  };

  handleLoginButton = () => {
    const { password, submit } = this.formRef.current.elements;

    if (password.value.length >= 8) {
      this.setState({ buttonClass: "login-button-enabled" });
      submit.disabled = false;
    } else {
      this.setState({ buttonClass: "login-button-disabled" });
      submit.disabled = true;
    }
  };

  componentDidMount() {
    const { username } = this.formRef.current.elements;
    username.focus();
  }

  render() {
    return (
      <form ref={this.formRef} onSubmit={this.handleFrom}>
        <h1>Login</h1>
        <label>Username:</label>
        <br />
        <input name="username" onChange={this.handleLoginButton} />
        <br />
        <label>Password:</label>
        <br />
        <input
          name="password"
          type="password"
          onChange={this.handleLoginButton}
        />
        <br />
        <input name="remember" type="checkbox" /> <label>Remember</label>
        <br />
        <button
          type="submit"
          name="submit"
          disabled={true}
          className={this.state.buttonClass}
        >
          Login
        </button>
        <button type="reset">Reset</button>
      </form>
    );
  }
}
