import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import Spinner from "../common/Spinner";

import { Container, Row } from "reactstrap";

class Posts extends Component {
  render() {
    return (
      <div className="feed">
        <Container>
          <Row>
            <div className="col-md-12">
              <PostForm />
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Posts;
