import React, { Component } from "react";
import { Container, Row, Form, FormGroup, Input } from "reactstrap";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    const loginUser = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(loginUser);
  };

  render() {
    return (
      <div className="register">
        <Container>
          <Row>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your DevConnector account
              </p>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </FormGroup>
                <Input type="submit" className="btn btn-info btn-block mt-4" />
              </Form>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
