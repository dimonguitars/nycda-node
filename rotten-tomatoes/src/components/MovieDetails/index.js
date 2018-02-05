import React, { PropTypes, Component } from 'react';
import { Control, Form, actions } from 'react-redux-form';
import './style.css';

class MovieDetails extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount(){
		this.props.actions.loadMovie(this.props.match.params.id);
	}

	handleSubmit(user) {
		this.props.actions.submitComment(user, this.props.match.params.id);
  }

	render() {
		console.log(this.props.comments)
		const comments = this.props.comments.map((comment) => {
			console.log(comment)
			return <div key={comment.id}>
				<h6>By {comment.user.first_name} {comment.user.last_name}</h6>
				<div>{comment.comment_text}</div>
			</div>
		});
		return (
			<div>
				<h1> Movie Details </h1>

				{this.props.requestPending &&
					<h3> Request Pending </h3>
			 	}

				{this.props.isError && this.props.errorMessage &&
					<h3> {this.props.errorMessage} </h3>
			 	}

				{!this.props.requestPending &&
					<div>
						<img src={this.props.movie.Poster} />
						<h2>{this.props.movie.Title}</h2>
					</div>
			 	}

				{this.props.comments.length > 0 &&
					<div>
						<h4> Comments </h4>
						<ul>
							{comments}
						</ul>
					</div>
			 	}

					<div>
						<h5>Add Comment</h5>
						<Form
		        model="user"
		        onSubmit={(user) => this.handleSubmit(user)}
		      >
		        <label htmlFor="user.firstName">First name:</label>
		        <Control.text model="user.firstName" id="user.firstName" />

		        <label htmlFor="user.lastName">Last name:</label>
		        <Control.text model="user.lastName" id="user.lastName" />

		        <label htmlFor="user.email">Email:</label>
		        <Control.text model="user.email" id="user.email" />

		        <label htmlFor="user.comment">Comment:</label>
		        <Control.textarea model="user.comment" id="user.comment" />

		        <button type="submit">
		          Submit!
		        </button>
		      </Form>
				</div>

			</div>
		)
	}
}

export default MovieDetails;
