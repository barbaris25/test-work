import React from 'react';
import Card from '../components/Card';
import Pagination from '../components/Pagination';

const Main = () => {
  return (
    <div className="main-page">
      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Pagination />
    </div>
  )
}

export default Main;
