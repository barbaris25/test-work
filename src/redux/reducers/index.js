import { combineReducers } from "redux";
import { cardReducer } from './cardReducer';
import { formReducer } from './formReducer';

export default combineReducers({
  card: cardReducer,
  form: formReducer,
});