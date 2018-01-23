import { LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE } from '../actions';

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: false,
  isSuccess: false,
  movies: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      };

    case LOAD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        movies: action.movies
      };
    }

    case LOAD_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.errorMessage,
        isSuccess: false
      };
    }

    default:
      return state;
  }
}
