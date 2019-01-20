import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TextFieldGroup from "../common/TextFieldGroup";
import { Card, CardHeader, CardBody, Form, Button } from "reactstrap";

import { addComment } from "../../actions/postActions";

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
			errors: {}
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();

		const { user } = this.props.auth;
		const { postId } = this.props;

		const newComment = {
			text: this.state.text,
			name: user.name,
			avatar: user.avatar
		};

		this.props.addComment(postId, newComment);
		this.setState({ text: "" });
	};

	render() {
		const { errors } = this.state;
		return (
			<div className="post-form mb-3 mt-3">
				<Card color="info">
					<CardHeader color="info" className="text-white">
						Make a comment...
					</CardHeader>
					<CardBody>
						<Form onSubmit={this.onSubmit}>
							<TextFieldGroup
								placeholder="Reply to post"
								type="textarea"
								name="text"
								value={this.state.text}
								onChange={this.onChange}
								error={errors.text}
							/>
							<Button type="submit" color="dark">
								Submit
							</Button>
						</Form>
					</CardBody>
				</Card>
			</div>
		);
	}
}

CommentForm.propTypes = {
	addComment: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	postId: PropTypes.string.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ addComment }
)(CommentForm);
