import React, { Component } from "react";
import isEmpty from "../../validation/is-empty";
import PropTypes from "prop-types";

import { Row, Card } from "reactstrap";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name.trim().split(" ")[0];

    // Skill List
    const skills = profile.skills.map((skill, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-check" /> {skill}
      </div>
    ));
    return (
      <Row>
        <Card body color="light" className="mb-3">
          <h3 className="text-center text-info">{firstName}'s Bio</h3>
          <p className="lead">
            {isEmpty(profile.bio) ? (
              <span>{firstName} does not have a bio</span>
            ) : (
              <span>{profile.bio}</span>
            )}
          </p>
          <hr />
          <h3 className="text-center text-info">Skill Set</h3>
          <Row>
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              {skills}
            </div>
          </Row>
        </Card>
      </Row>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
