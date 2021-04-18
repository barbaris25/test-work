import React from 'react';
import { usePagination } from '../hooks/pagination';

import '../scss/components/pagination.scss';

export const Pagination = (props) => {
  const { renderControls, getPaginatedData } = usePagination(props);

  return (
    <>
      {getPaginatedData().map(props.render)}
      {renderControls()}
    </>
  )
};