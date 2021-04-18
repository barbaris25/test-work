import React from 'react';
import classNames from 'classnames';

// Styles
import '../scss/components/modal.scss';

export const Modal = ({ classes, text }) => {
  const [modal, setModal] = React.useState(true);
  const modalClasses = classNames('modals', ...classes);
  const handleCloseModal = () => {setModal(false)};

  return (
    <>
      {
        modal 
        ? <div className={modalClasses}>
            { text}

            <button type="button" className="modals__button" onClick={handleCloseModal}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
        : null
      }
    </>
  )
};
