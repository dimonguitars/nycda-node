// components/CounterApp.jsx
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import MovieList from '../components/MovieList/';

const mapStateToProps = (state) => {
  return{
    movies: state.movie_reducer.movies,
    requestPending: state.movie_reducer.isLoading,
    isError: state.movie_reducer.isError,
    errorMessage: state.movie_reducer.errorMessage
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

const MovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

export default MovieListContainer;
