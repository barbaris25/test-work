import React from 'react';
import { Form } from '../components/Form';

export const User = ({ match }) => {
  const urlData = match;

  return (
    <div className="row">
      <Form props={{
        text: "Изменить пользователя",
        match: urlData
      }} />
    </div>
  )
};