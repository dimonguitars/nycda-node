import React, { PropTypes, Component } from 'react';
import './style.css';

class MovieDetails extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount(){
		this.props.actions.loadMovie(this.props.match.params.id);
	}

	render() {
		console.log(this.props.movie)
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
			</div>
		)
	}
}

export default MovieDetails;
