import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import { NavLink as RouteLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class AppNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
    this.props.clearCurrentProfile();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={RouteLink} exact to="/dashboard">
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            tag={RouteLink}
            exact
            to="/"
            onClick={this.onLogoutClick.bind(this)}
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "30px", marginRight: "5px" }}
              title="You must have a gravatar connected to your email to display an image"
            />{" "}
            Logout
          </NavLink>
        </NavItem>
      </Nav>
    );

    const guestLinks = (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={RouteLink} exact to="/register">
            Sign Up
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RouteLink} exact to="/login">
            Login
          </NavLink>
        </NavItem>
      </Nav>
    );

    return (
      <Navbar color="dark" dark expand="sm">
        <Container>
          <NavbarBrand tag={RouteLink} exact to="/">
            DevConnector
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={RouteLink} exact to="/profiles">
                  Developers
                </NavLink>
              </NavItem>
            </Nav>
            {isAuthenticated ? authLinks : guestLinks}
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

AppNavbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(AppNavbar);
