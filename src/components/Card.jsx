import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../redux/api';
import avatarPick from '../assets/img/avatar.png';

import '../scss/components/card.scss';

export const Card = ({ data }) => {
  const dispatch = useDispatch();

  let {avatar, desc, id, name, surname} = data;
  if (!avatar) avatar = avatarPick;
  
  const handleDeleteUser = id => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="col m4 s12">
      <div className="card">
        <div className="card-image">
          <img src={avatar} alt="" />
          
          <Link
            to={{pathname: '/profile/' + id}}
            className="btn-floating halfway-fab waves-effect waves-light blue"
          >
            <i className="material-icons">mode_edit</i>
          </Link>

          <button 
            className="btn-floating halfway-fab waves-effect waves-light blue"
            onClick={() => handleDeleteUser(id)}
          >
            <i className="material-icons">delete</i>
          </button>
        </div>

        <div className="card-content">
          <span className="card-title">{name} <br /> {surname}</span>
          <span className="description">{desc}</span>
        </div>
      </div>
    </div>
  )
};