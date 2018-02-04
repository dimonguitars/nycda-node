import React, { PropTypes, Component } from 'react';
import './style.css';

class MovieList extends Component {
	constructor(props) {
		super(props);
	}

	onSearch(event) {
		this.props.actions.loadMovies(event.target.value);
	}

	render() {
		const movies = this.props.movies.map((movie) => {
			return <li id={movie.imdbID} key={movie.imdbID}>{movie.Title}</li>
		});

		return (
			<div>
				<input type="text" onChange={this.onSearch.bind(this)}/>
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
