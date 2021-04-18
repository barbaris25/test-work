import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik';
import { Loader } from './Loader';
import { Modal } from './Modal';
import * as yup from "yup";
import { addUser, rewriteUser, resetFormData } from '../redux/api';

// Styles
import '../scss/components/form.scss';

const validations = yup.object().shape({
  name: yup.string().min(3, 'Вы ввели слишком мало символов!').required('Поле не можеь быть пустым!'),
  surname: yup.string().min(3, 'Вы ввели слишком мало символов!').required('Поле не можеь быть пустым!'),
  desc: yup.string().min(5, 'Вы ввели слишком мало символов!').required('Поле не можеь быть пустым!'),
});

const messages = {
  success: {
    classes: ['success'],
    text: 'Пользователь успешно добавлен'
  }, 
  userEdited: {
    classes: ['info'],
    text: 'Данные пользователя успешно изменены!'
  },
  error: {
    classes: ['error'],
    text: 'Что-то пошло не так. Попробуйте обновить страницу ввести данные еще раз'
  }
}

export const Form = ({ props }) => {
  const dispatch = useDispatch();

  const { text, match } = props;
  const userID = match ? Number(match.params.id) : null;
  let [userData] = useSelector((state) => state.card.users.filter(user => user.id === userID));

  React.useEffect(() => {
    return () => {
      dispatch(resetFormData());
    }
  }, []);

  const { isLoading, isError, isSuccess, isEditUser } = useSelector(state => ({
    isLoading: state.form.isLoading,
    isError: state.form.isError,
    isSuccess: state.form.isSuccess,
    isEditUser: state.form.isEditUser
  }));

  // Render logic
  if (isLoading) return <Loader />

  let error = isError ? <Modal classes={messages.error.classes} text={messages.error.text} /> : null;
  let success = isSuccess ? <Modal classes={messages.success.classes} text={messages.success.text} /> : null;
  let edited = (isSuccess && isEditUser) ? <Modal classes={messages.userEdited.classes} text={messages.userEdited.text} /> : null;
  let successRender;

  if (isSuccess && isEditUser) {
    successRender = edited;
  } else if (isSuccess && !isEditUser) {
    successRender = success;
  } else {
    successRender = null;
  }

  // Form logic
  const defaultFormValues = {
    name: '',
    surname: '',
    desc: '',
    avatar: ''
  };

  if (userData) {
    for (const key of Object.keys(userData)) {
      if (!userData[key]) {
        userData[key] = ""
      }
    }
  }
  
  const formUserData = userID ? userData : defaultFormValues;

  const handleValidate = (checkErrors, cb) => {
    checkErrors().then(errors => Object.keys(errors).forEach(error => cb(error)));
  };

  return (
    <div className="col m8 offset-m2 s12">
      { error }
      { successRender }

      { !isEditUser
        ? <Formik 
            initialValues={{ ...formUserData }}
            validationSchema={validations}
            onSubmit={data => {
              if (userData) {
                dispatch(rewriteUser(userID, data));
              } else {
                dispatch(addUser(data));
              }
            }}
          >
            {({ isValid, setFieldTouched, validateForm }) => (
              <FormikForm className="user-form">
                <p className="user-form__title">{ text }</p>

                <div className="row">
                  <div className="input-field col s12">
                    <Field id="name" name="name" type="text" />
                    <label className="active" htmlFor="name">Имя</label>
                    <ErrorMessage className="helper-text" component="span" name="name"></ErrorMessage>
                  </div>

                  <div className="input-field col s12">
                    <Field id="lastname" name="surname" type="text" />
                    <label className="active" htmlFor="lastname">Фамилия</label>
                    <ErrorMessage className="helper-text" component="span" name="surname"></ErrorMessage>
                  </div>

                  <div className="input-field col s12">
                    <Field id="description" name="desc" type="text" />
                    <label className="active" htmlFor="description">Описание</label>
                    <ErrorMessage className="helper-text" component="span" name="desc"></ErrorMessage>
                  </div>

                  <div className="input-field col s12">
                    <Field id="avatar" type="text" name="avatar" />
                    <label className="active" htmlFor="avatar">Ссылка на аватар</label>
                  </div>

                  <div className="input-field col s12">
                    <button className="btn waves-effect waves-light" type="submit" onClick={() => handleValidate(validateForm, setFieldTouched)}>
                      Сохранить данные
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                </div>
              </FormikForm>
            )}
          </Formik>

        : <Link to="/" className="waves-effect waves-light btn">Вернуться на главную</Link>
      }       
    </div>
  )
};

Form.propTypes = {
  props: PropTypes.object.isRequired
};
