// components/CounterApp.jsx
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import MovieDetails from '../components/MovieDetails/';

const mapStateToProps = (state) => {
  return{
    movie: state.movie_reducer.movie,
    requestPending: state.movie_reducer.isLoading,
    isError: state.movie_reducer.isError,
    errorMessage: state.movie_reducer.errorMessage,
    comments: state.movie_reducer.comments
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

const MovieDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);

export default MovieDetailsContainer;
