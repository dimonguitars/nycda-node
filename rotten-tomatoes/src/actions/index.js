import axios from 'axios';
import fetch from 'isomorphic-fetch';
require('dotenv').config();

// actions/index.js
// Namespace actions
export const LOAD_REQUEST = 'movieList/LOAD_REQUEST';
export const LOAD_SUCCESS = 'movieList/LOAD_SUCCESS';
export const LOAD_FAILURE = 'movieList/LOAD_FAILURE';

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
					dispatch(someActionCreator(responseJson))
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

export const handleFailure = (err) => {
	return {
		type: LOAD_FAILURE,
		errorMessage: err.Error
	};
};

export const requestMovies = () => {
	return {type: LOAD_REQUEST};
};

export const someActionCreator = (jsonData) => {
  return {
    type: LOAD_SUCCESS,
    // anything else you want!!
    // include movies coming from the data
    movies: jsonData.Search
    // TODO: handle edge cases: null response, no search results
  }
};
