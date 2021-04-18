import {
  START_FETCH_USERS_DATA,
  FINISH_FETCH_USERS_DATA,
  ERROR_FETCH_USERS_DATA,
  START_SEND_FORM_DATA,
  FINISH_SEND_FORM_DATA,
  EDIT_USER_FORM_DATA,
  ERROR_SEND_FORM_DATA,
  RESET_FORM_DATA,
  DELETE_CARD
} from '../actionTypes';

// Fetch users
export const startFetchUsersData = () => ({
  type: START_FETCH_USERS_DATA
});

export const finishFetchUsersData = (data) => ({
  type: FINISH_FETCH_USERS_DATA,
  payload: data
});

export const errorFetchUsersData = (error) => ({
  type: ERROR_FETCH_USERS_DATA,
  payload: error
});

export const deleteCard = (data) => ({
  type: DELETE_CARD,
  payload: data
});


// Form
export const startSendFormData = () => ({
  type: START_SEND_FORM_DATA
});

export const finishSendFormData = () => ({
  type: FINISH_SEND_FORM_DATA
});

export const editUserFormData = () => ({
  type: EDIT_USER_FORM_DATA
});

export const resetFormData = () => ({
  type: RESET_FORM_DATA
});

export const errorSendFormData = (error) => ({
  type: ERROR_SEND_FORM_DATA,
  payload: error
});

