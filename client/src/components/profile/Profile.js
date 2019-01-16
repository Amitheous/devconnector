import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Container, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";

import { getProfileByHandle } from "../../actions/profileActions";

import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
import ProfileGithub from "./ProfileGithub";
import Spinner from "../common/Spinner";

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <ProfileHeader profile={profile} />
          <ProfileAbout profile={profile} />
          <ProfileCreds
            education={profile.education}
            experience={profile.experience}
          />
          {profile.githubusername ? (
            <ProfileGithub username={profile.githubusername} />
          ) : null}
        </div>
      );
    }
    return (
      <Container className="profile">
        <Row>
          <div className="col-md-6 mt-4">
            <Link to="/profiles">
              <Button color="light" className="mb-3 float-left">
                Back To Profiles
              </Button>
            </Link>
          </div>
          <div className="col-md-6" />
        </Row>
        <Row>
          <div className="col-md-12">{profileContent}</div>
        </Row>
      </Container>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfileByHandle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(Profile);
