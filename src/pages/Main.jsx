import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../components/Card';
import { Loader } from '../components/Loader';
import { Pagination } from '../components/Pagination';
import { fetchUsers } from '../redux/api';

export const Main = () => {
  const {users, isLoading, isError} = useSelector(state => ({
    users: state.card.users,
    isLoading: state.card.isLoading,
    isError: state.card.isError
  }));

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) return <Loader />
  if (isError) return <p>Что-то пошло не так. Попробуйте обновить страницу или зайти позже</p>
 
  return (
    <div className="main-page">
      <div className="row">
        { users 
          &&  <Pagination 
                data={users}
                dataOffset={5}
                controlsOffset={5}
                render={(user, index) => <Card key={index} data={user} />}
              />
        }
      </div>
    </div>
  )
};
