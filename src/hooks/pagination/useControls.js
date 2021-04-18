import React from 'react';
import classNames from 'classnames';

export const useControls = ({ totalOfPages, controlsOffset = 5 }) => {
  const [currentPage, setCurrentPage] = React.useState(1)

  const nextPageHandler = () => {
    const isLastPage = currentPage >= totalOfPages;

    isLastPage 
      ? setCurrentPage(() => totalOfPages)
      : setCurrentPage(() => currentPage + 1)
  };

  const prevPageHandler = () => {
    currentPage <= 1
      ? setCurrentPage(() => 1)
      : setCurrentPage((prevState) => prevState - 1)
  };

  const goToPage = (targetPage) => {
    targetPage > totalOfPages
      ? setCurrentPage(() => totalOfPages)
      : setCurrentPage(() => (targetPage < 1 ? 1 : targetPage))
  }

  const calculateMaxVisible = () => {
    let maxLeft = currentPage - Math.floor(controlsOffset / 2);
    let maxRight = currentPage + Math.floor(controlsOffset / 2);

    if (maxLeft < 1) {
      maxLeft = 1;
      maxRight = controlsOffset;
    }

    if (maxRight > totalOfPages) {
      maxLeft = totalOfPages - (controlsOffset - 1);
      maxRight = totalOfPages;

      if (maxLeft < 1) maxLeft = 1;
    }

    return { maxLeft, maxRight };
  };

  const renderControlIndexes = () => {
    const { maxLeft, maxRight } = calculateMaxVisible();
    let indexes = [];

    for (let page = maxLeft; page <= maxRight; page++) {
      indexes.push(page);
    };

    return indexes.map((index) => {
      const activeClass = classNames('waves-effect', {
        'active': index === currentPage
      });

      return (
        <li
          className={activeClass}
          key={index}
          onClick={() => goToPage(index)}
        >
          <a href="#!">{index}</a>
        </li>
      )
    });
  };

  const renderControls = () => {
    const { maxLeft, maxRight } = calculateMaxVisible();

    const prevBtnClass = classNames('waves-effect', {
      'disabled': maxLeft === currentPage
    });

    const nextBtnClass = classNames('waves-effect', {
      'disabled': maxRight === currentPage
    });

    return (
      <div className="col s12 pagination">
        <li onClick={() => goToPage(0)} className={prevBtnClass}>
          <a href="#!"><i className="material-icons">fast_rewind</i></a>
        </li>

        <li onClick={prevPageHandler} className={prevBtnClass}>
          <a href="#!"><i className="material-icons">chevron_left</i></a>
        </li>

        {renderControlIndexes()}
        
        <li onClick={nextPageHandler} className={nextBtnClass}>
          <a href="#!"><i className="material-icons">chevron_right</i></a>
        </li>

        <li onClick={() => goToPage(totalOfPages)} className={nextBtnClass}>
          <a href="#!"><i className="material-icons">fast_forward</i></a>
        </li>
      </div>
    )
  };

  return {
    currentPage,
    renderControls,
  }
}
