import { 
  startFetchUsersData,
  finishFetchUsersData,
  errorFetchUsersData,
  
  startSendFormData,
  finishSendFormData,
  editUserFormData,
  errorSendFormData,
  resetFormData,
  
  deleteCard,
} from '../actions';

const baseUrl = 'http://77.120.241.80:8811/api';

const fetchUsers = () => {
  return dispatch => {
    dispatch(startFetchUsersData());

    fetch(`${baseUrl}/users`)
      .then(res => res.json())
      .then(result => {  
        setTimeout(() => {
          dispatch(finishFetchUsersData(result));
        }, 1000);
      })
      .catch(error => {
        dispatch(errorFetchUsersData(error));
      });
  }
};

const addUser = (data) => {
  return dispatch => {
    dispatch(startSendFormData());
   
    fetch(`${baseUrl}/users`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(() => {  
        dispatch(finishSendFormData());
      })
      .catch(error => {
        dispatch(errorSendFormData(error));
      });
  }
};

const deleteUser = (id) => {
  return dispatch => {
    fetch(`${baseUrl}/user/` + id, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {  
        dispatch(deleteCard(result));
        fetchUsers();
      })
      .catch(error => {
        dispatch(errorSendFormData(error));
      });
  }
};

const rewriteUser = (id, data) => {
  return dispatch => {
    dispatch(startSendFormData());

    fetch(`${baseUrl}/user/` + id, {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(() => {  
        dispatch(finishSendFormData());
        dispatch(editUserFormData());
      })
      .catch(error => {
        dispatch(errorSendFormData(error));
      });
  }
}

export {
  fetchUsers,
  addUser,
  deleteUser,
  rewriteUser,
  resetFormData,
}
