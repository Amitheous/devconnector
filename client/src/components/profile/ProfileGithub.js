import React, { Component } from "react";
import PropTypes from "prop-types";
import { Badge, Row, Card, CardLink } from "reactstrap";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "38f025932ff628c0ed3f",
      clientSecret: "7fa129c8c8e796980d854075c3caa37503a0e43c",
      count: 5,
      sort: "created: asc",
      repos: []
    };
  }

  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({ repos: data });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;

    const repoItems = repos.map(repo => (
      <Card body key={repo.id} className="mb-2">
        <Row>
          <div className="col-md-6">
            <h4>
              <CardLink
                href={repo.html_url}
                className="text-info"
                target="_blank"
                rel="noopener noreferrer"
              >
                {repo.name}
              </CardLink>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div className="col-md-6 text-center">
            <Badge color="info" className="mr-1">
              Stars: {repo.stargazers_count}
            </Badge>
            <Badge color="secondary" className="mr-1">
              Watchers: {repo.watchers_count}
            </Badge>
            <Badge color="success">Forks: {repo.forks_count}</Badge>
          </div>
        </Row>
      </Card>
    ));
    return (
      <div ref="myRef" className="mt-4">
        <hr />
        <h3 className="mb-4 text-center">Latest Github Repos</h3>
        {repoItems}
      </div>
    );
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
};

export default ProfileGithub;
