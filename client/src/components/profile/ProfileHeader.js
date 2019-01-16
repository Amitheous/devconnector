import React, { Component } from "react";
import { Row, Card, CardImg } from "reactstrap";
import isEmpty from "../../validation/is-empty";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;
    return (
      <Row>
        <div className="col-md-12">
          <Card body color="info" className="text-white mb-3">
            <Row>
              <div className="col-4 col-md-3 m-auto">
                <CardImg
                  src={profile.user.avatar}
                  className="rounded-circle"
                  alt=""
                />
              </div>
            </Row>
            <div className="text-center">
              <h1 className="display-4 text-center">{profile.user.name}</h1>
              <p className="lead text-center">
                {profile.status}{" "}
                {isEmpty(profile.company) ? null : (
                  <span>at {profile.company}</span>
                )}{" "}
              </p>
              {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
              <p>
                {isEmpty(profile.website) ? null : (
                  <a
                    href={profile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white p-2"
                  >
                    <i className="fas fa-globe fa-2x" />
                  </a>
                )}
                {isEmpty(profile.social.linkedin) ? null : (
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white p-2"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                )}
                {isEmpty(profile.social.facebook) ? null : (
                  <a
                    href={profile.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white p-2"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </a>
                )}
                {isEmpty(profile.social.twitter) ? null : (
                  <a
                    href={profile.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white p-2"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </a>
                )}
                {isEmpty(profile.social.instagram) ? null : (
                  <a
                    href={profile.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white p-2"
                  >
                    <i className="fab fa-instagram fa-2x" />
                  </a>
                )}
                {isEmpty(profile.social.youtube) ? null : (
                  <a
                    href={profile.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white p-2"
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                )}
              </p>
            </div>
          </Card>
        </div>
      </Row>
    );
  }
}

export default ProfileHeader;
