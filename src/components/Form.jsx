import React from 'react';
import '../scss/components/form.scss'

const Form = () => {
  return (
    <form className="col m8 offset-m2 s12 user-form">
      <p className="user-form__title">Edit user</p>

      <div className="row">
        <div className="input-field col s12">
          <input id="name" type="text" />
          <label htmlFor="name">Имя</label>
        </div>

        <div className="input-field col s12">
          <input id="lastname" type="text" />
          <label htmlFor="lastname">Фамилия</label>
        </div>

        <div className="input-field col s12">
          <input id="description" type="text" />
          <label htmlFor="description">Описание</label>
        </div>

        <div className="input-field col s12">
          <input id="avatar" type="text" />
          <label htmlFor="avatar">Ссылка на аватар</label>
        </div>

        <div className="input-field col s12">
          <button className="btn waves-effect waves-light" type="submit">
            Сохранить данные
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form
