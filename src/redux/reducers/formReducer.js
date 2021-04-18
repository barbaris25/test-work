import { 
  ERROR_SEND_FORM_DATA, 
  FINISH_SEND_FORM_DATA, 
  START_SEND_FORM_DATA,
  EDIT_USER_FORM_DATA,
  RESET_FORM_DATA,
} from "../actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  isEditUser: false,
  errorMsg: '',
};

export const formReducer = (state = initState, action) => {
  switch (action.type) {
    case START_SEND_FORM_DATA:
      return {
        ...state,
        isLoading: true,
      }

    case FINISH_SEND_FORM_DATA:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      }

    case ERROR_SEND_FORM_DATA:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errorMsg: action.payload
      }

    case EDIT_USER_FORM_DATA:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isEditUser: true
      }

    case RESET_FORM_DATA:    
      return {
        ...initState
      }

    default:
      return state;
  }
};