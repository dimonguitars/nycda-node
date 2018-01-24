// components/CounterApp.jsx
import { connect } from 'react-redux';
import { loadMovies } from '../actions';
import MovieList from './MovieList';

const mapStateToProps = (state, ownProps) => {
  return{
    movies: state.movies,
    requestPending: state.isLoading,
    isError: state.isError,
    errorMessage: state.errorMessage
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    onDidMount: () => {
      loadMovies
    },
    onSearchChange: (param) => {
      loadMovies(param, dispatch)
    }
  }
};

const MovieListApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

export default MovieListApp;
