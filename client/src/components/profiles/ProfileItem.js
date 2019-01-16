import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

import { Card, CardImg, Button, Row, Col } from "reactstrap";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    return (
      <Card body color="light">
        <Row>
          <Col md="2" xs="4" className="my-auto">
            <CardImg src={profile.user.avatar} className="rounded-circle" />
          </Col>
          <Col lg="6" md="4" xs="8">
            <h3>{profile.user.name}</h3>
            <p>
              {profile.status}{" "}
              {isEmpty(profile.company) ? null : (
                <span>at {profile.company}</span>
              )}{" "}
            </p>
            <p>
              {isEmpty(profile.location) ? null : (
                <span>{profile.location}</span>
              )}
            </p>
            <Link to={`/profile/${profile.handle}`}>
              <Button color="info">View Profile</Button>
            </Link>
          </Col>
          <div className="md-4 d-none d-md-block mx-auto">
            <h4>Skill Set</h4>
            <ul className="list-group">
              {profile.skills.slice(0, 4).map((skill, index) => (
                <li key={index} className="list-group-item">
                  <i className="fa fa-check pr-1" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Row>
      </Card>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};
export default ProfileItem;
