import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment } from "../../actions/postActions";
import { Card, Row, Button } from "reactstrap";

class CommentItem extends Component {
	onDeleteClick(postId, commentId) {
		this.props.deleteComment(postId, commentId);
	}
	render() {
		const { comment, postId, auth } = this.props;
		return (
			<Card className="mb-3">
				<Row className="m-3">
					<div className="col-md-2">
						<img
							className="rounded-circle d-none d-md-block center7"
							src={comment.avatar}
						/>
						<br />
						<p className="text-center">{comment.name}</p>
					</div>
					<div className="col-md-8">
						<p className="lead">{comment.text}</p>
					</div>
					<div className="col-md-2">
						{comment.user === auth.user.id ? (
							<Button
								color="danger"
								className="mr-1 float-right"
								onClick={this.onDeleteClick.bind(this, postId, comment._id)}
							>
								<i className="fas fa-times" />
							</Button>
						) : null}
					</div>
				</Row>
			</Card>
		);
	}
}

CommentItem.propTypes = {
	deleteComment: PropTypes.func.isRequired,
	comment: PropTypes.object.isRequired,
	postId: PropTypes.string.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ deleteComment }
)(CommentItem);
