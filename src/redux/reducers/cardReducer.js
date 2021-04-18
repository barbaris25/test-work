import {
  START_FETCH_USERS_DATA,
  FINISH_FETCH_USERS_DATA,
  ERROR_FETCH_USERS_DATA,
  DELETE_CARD
} from "../actionTypes";


const initialState = {
  users: [],
  isLoading: false,
  isError: false,
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCH_USERS_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
      }

    case FINISH_FETCH_USERS_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: action.payload
      }

    case ERROR_FETCH_USERS_DATA:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }

    case DELETE_CARD:
      return {
        ...state,
        users: action.payload,
      }

    default:
      return state;
  }
};