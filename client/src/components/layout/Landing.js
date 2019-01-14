import React, { Component } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink as RouteLink } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
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

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
