import axios from 'axios';
import fetch from 'isomorphic-fetch';
require('dotenv').config();

// actions/index.js
// Namespace actions
export const LOAD_REQUEST = 'movieList/LOAD_REQUEST';
export const LOAD_SUCCESS = 'movieList/LOAD_SUCCESS';
export const LOAD_FAILURE = 'movieList/LOAD_FAILURE';
export const DETAILS_SUCCESS = 'movieDetails/DETAILS_SUCCESS';
export const DETAILS_REQUEST = 'movieDetails/DETAILS_REQUEST';
export const COMMENT_SUCCESS = 'movieComment/COMMENT_SUCCESS';
export const COMMENT_REQUEST = 'movieComment/COMMENT_REQUEST';
export const COMMENT_SUBMIT_SUCCESS = 'movieComment/COMMENT_SUBMIT_SUCCESS';
export const COMMENT_SUBMIT_CREATE = 'movieComment/COMMENT_SUBMIT_CREATE';
export const COMMENT_SUBMIT_CHECK = 'movieComment/COMMENT_SUBMIT_REQUEST';

// action creators go here

export const loadMovies = (searchParam) => {
	return dispatch => {
			// fetch happens inside load request action creator!
			console.log(searchParam);
			// indicate we are loading movies now
			dispatch(requestMovies());

			fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${searchParam}`)
			.then((response) => response.json())
			.then((responseJson) => {
				// "we successfully got back a response" scenario
				// requirement: generate a view with the movie results upon successfully getting a response
				// --> do things here that will eventually update the view

				// dispatch EMITS AN ACTION
				// (an action <--> view only)
				// --> dispatch change the view to the success view
				console.log(responseJson);
				// check if not too many results
				if(responseJson.Response != 'False'){
					dispatch(loadedMovies(responseJson))
				}
				else{
					dispatch(handleFailure(responseJson))
				}
			})
			// ...what about failure?...
			.catch((err) => {
					dispatch(handleFailure(err))
				}
			)
    }
};

export const loadMovie = (id) => {
	return dispatch => {
			// fetch happens inside load request action creator!
			console.log(id);
			// indicate we are loading movies now
			dispatch(requestMovie());

			fetch(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`)
			.then((response) => response.json())
			.then((responseJson) => {
				// "we successfully got back a response" scenario
				// requirement: generate a view with the movie results upon successfully getting a response
				// --> do things here that will eventually update the view

				// dispatch EMITS AN ACTION
				// (an action <--> view only)
				// --> dispatch change the view to the success view
				console.log(responseJson);
				axios.get(`/api/comments/${id}`)
            .then(res => dispatch(getComments(res.data)))
            .catch(err => dispatch(handleFailure(err)))

				// check if not too many results
				if(responseJson.Response != 'False'){
					dispatch(loadedMovie(responseJson))
				}
				else{
					dispatch(handleFailure(responseJson))
				}
			})
			// ...what about failure?...
			.catch((err) => {
					dispatch(handleFailure(err))
				}
			)
    }
};

export const submitComment = (user, movie_id) => {
	return dispatch => {
			// fetch happens inside load request action creator!
			console.log(user);
			console.log(movie_id);

			axios.get(`/api/users/${user.email}`)
          .then(
						res => {
							console.log(res);
							if(res.data !== ''){
								console.log(res.data);
								axios.post(`/api/comments/create/comment`, {
									userId: res.data.id,
									comment: user.comment,
									movieId: movie_id
								}).then(
									res => {
										console.log(res);
										axios.get(`/api/comments/${movie_id}`)
													.then(res => dispatch(getComments(res.data)))
													.catch(err => dispatch(handleFailure(err)))
									}
								)
							}
							else{
								console.log(res.data);
								axios.post(`/api/users/create/user`, {
							    user: user
							  }).then(
									res => {
										console.log(res);
										axios.post(`/api/comments/create/comment`, {
									    userId: res.data.id,
											comment: user.comment,
											movieId: movie_id
									  }).then(
											res => {
												console.log(res);
												axios.get(`/api/comments/${movie_id}`)
									            .then(res => dispatch(getComments(res.data)))
									            .catch(err => dispatch(handleFailure(err)))
											}
										)
									}
								)
								// TO DO: better error handling
								.catch(err => dispatch(checkIfUserExists({})))
							}
						}
					)
          .catch(err => dispatch(checkIfUserExists({})))

      //
			// fetch(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`)
			// .then((response) => response.json())
			// .then((responseJson) => {
			// 	// "we successfully got back a response" scenario
			// 	// requirement: generate a view with the movie results upon successfully getting a response
			// 	// --> do things here that will eventually update the view
      //
			// 	// dispatch EMITS AN ACTION
			// 	// (an action <--> view only)
			// 	// --> dispatch change the view to the success view
			// 	console.log(responseJson);
			// 	axios.get(`/api/comments/${id}`)
      //       .then(res => dispatch(getComments(res.data)))
      //       .catch(err => dispatch(handleFailure(err)))
      //
			// 	// check if not too many results
			// 	if(responseJson.Response != 'False'){
			// 		dispatch(loadedMovie(responseJson))
			// 	}
			// 	else{
			// 		dispatch(handleFailure(responseJson))
			// 	}
			// })
			// // ...what about failure?...
			// .catch((err) => {
			// 		dispatch(handleFailure(err))
			// 	}
			// )
    }
};

export const handleFailure = (err) => {
	return {
		type: LOAD_FAILURE,
		errorMessage: err.Error
	};
};

export const requestMovies = () => {
	return {type: LOAD_REQUEST};
};

export const checkIfUserExists = (user) => {
	return {
		type: COMMENT_SUBMIT_CHECK,
	  user: user
 };
};

export const createUser = (user) => {
	return {
		type: COMMENT_SUBMIT_CREATE,
	  user: user
 };
};

export const requestMovie = () => {
	return {type: DETAILS_REQUEST};
};

export const loadedMovies = (jsonData) => {
  return {
    type: LOAD_SUCCESS,
    // anything else you want!!
    // include movies coming from the data
    movies: jsonData.Search
    // TODO: handle edge cases: null response, no search results
  }
};

export const loadedMovie = (jsonData) => {
  return {
    type: DETAILS_SUCCESS,
    // anything else you want!!
    // include movies coming from the data
    movie: jsonData
    // TODO: handle edge cases: null response, no search results
  }
};

export const getComments = (jsonData) => {
	console.log(jsonData);
  return {
    type: COMMENT_SUCCESS,
    // anything else you want!!
    // include movies coming from the data
    comments: jsonData
    // TODO: handle edge cases: null response, no search results
  }
};
