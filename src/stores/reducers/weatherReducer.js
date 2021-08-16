import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  LOADING_APPLY,
} from '../actions/const';

const initializeState = {
  data: {},
  status: null,
  error: null,
  loading: false,
};

export default function reducer(state = initializeState, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        status: 'success',
      };
    }
    case FETCH_DATA_FAIL: {
      return {
        ...state,
        error: action.payload,
        status: 'failed',
      };
    }
    case LOADING_APPLY: {
      return {
        ...state,
        loading: action.payload.loading,
        status: action.payload.status ? action.payload.status : state.status,
      };
    }
    default: {
      return state;
    }
  }
}
