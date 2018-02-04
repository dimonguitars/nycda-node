import React, { PropTypes, Component } from 'react';
import './style.css';

class MovieList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props);
		const movies = this.props.movies.map((movie) => {
			return <li key={movie.imdbID}>{movie.Title}</li>
		});

		return (
			<div>
				<input type="text" onChange={this.props.actions.loadMovies('as')}/>
				<h1> Movie List </h1>

				{this.props.requestPending &&
					<h3> Request Pending </h3>
			 	}

				{this.props.isError && this.props.errorMessage &&
					<h3> {this.props.errorMessage} </h3>
			 	}

				{!this.props.requestPending &&
					<div>
						<ul>
							{movies}
						</ul>
					</div>
			 	}
			</div>
		)
	}
}

export default MovieList;
