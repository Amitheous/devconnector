import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "reactstrap";

const ProfileActions = () => {
  return (
    <ButtonGroup className="mb-4">
      <Link to="/edit-profile">
        <Button color="light">
          <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
        </Button>
      </Link>
      <Link to="/add-experience">
        <Button color="light">
          <i className="fas fa-user-circle text-info mr-1" /> Add Experience
        </Button>
      </Link>
      <Link to="/add-education">
        <Button color="light">
          <i className="fas fa-user-circle text-info mr-1" /> Add Education
        </Button>
      </Link>
    </ButtonGroup>
  );
};

export default ProfileActions;
