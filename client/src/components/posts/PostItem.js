import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Row, Button, Badge } from "reactstrap";

import { deletePost, likePost, unlikePost } from "../../actions/postActions";

class PostItem extends Component {
	onDeleteClick(id) {
		this.props.deletePost(id);
	}

	onLikeClick(id) {
		const { post, auth } = this.props;
		if (post.likes.filter(like => like.user === auth.user.id).length > 0) {
			this.props.unlikePost(id);
		} else {
			this.props.likePost(id);
		}
	}

	render() {
		const { post, auth, showActions } = this.props;

		return (
			<Card body className="mb-3 border-dark">
				<Row>
					<div className="col-md-2">
						<a>
							<img src={post.avatar} class="rounded-circle d-none d-md-block" />
						</a>
						<br />
						<p className="text-center">{post.name}</p>
					</div>
					<div className="col-md-10">
						<p className="lead">{post.text}</p>
						{showActions ? (
							<span>
								<Button
									onClick={this.onLikeClick.bind(this, post._id)}
									color="light"
									className="mr-1"
								>
									<i class="fas fa-thumbs-up text-info" />
									<Badge color="light">{post.likes.length}</Badge>
								</Button>
								<Link to={`/post/${post._id}`} className="btn btn-info mr-1">
									Comments
								</Link>
								{post.user === auth.user.id ? (
									<Button
										color="danger"
										className="mr-1"
										onClick={this.onDeleteClick.bind(this, post._id)}
									>
										<i className="fas fa-times" />
									</Button>
								) : null}
							</span>
						) : null}
					</div>
				</Row>
			</Card>
		);
	}
}

PostItem.defaultProps = {
	showActions: true
};

PostItem.propTypes = {
	post: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	deletePost: PropTypes.func.isRequired,
	likePost: PropTypes.func.isRequired,
	unlikePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ deletePost, likePost, unlikePost }
)(PostItem);
