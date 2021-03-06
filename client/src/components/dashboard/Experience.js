import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteExperience } from "../../actions/profileActions";

import Moment from "react-moment";
import { Table, Button } from "reactstrap";

class Experience extends Component {
  onDeleteClick = id => {
    this.props.deleteExperience(id);
  };
  render() {
    const experience = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
          {exp.to === null ? (
            "Now"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </td>
        <td>
          <Button
            onClick={this.onDeleteClick.bind(this, exp._id)}
            color="danger"
          >
            Delete
          </Button>
        </td>
      </tr>
    ));

    return (
      <div>
        <h4 className="mb-3">Experience Credentials</h4>
        <Table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th />
            </tr>
          </thead>
          {experience}
        </Table>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
