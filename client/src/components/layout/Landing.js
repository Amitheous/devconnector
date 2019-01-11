import React, { Component } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink as RouteLink } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <Container>
            <Row>
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Developer Connector</h1>
                <p className="lead">
                  Create a developer profile/portfolio, share posts, and get
                  help from other developers
                </p>
                <hr />
                <Button
                  tag={RouteLink}
                  exact
                  to="/register"
                  size="lg"
                  color="info"
                  className="mr-2"
                >
                  Sign Up
                </Button>
                <Button
                  tag={RouteLink}
                  exact
                  to="/login"
                  size="lg"
                  color="light"
                >
                  Login
                </Button>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
