import React from 'react';
import '../scss/components/card.scss';

const Card = () => {
  return (
    <div className="col m4 s12">
      <div className="card">
        <div className="card-image">
          <img src="https://materializecss.com/images/sample-1.jpg" alt="" />
          
          <a className="btn-floating halfway-fab waves-effect waves-light blue" href="#"><i className="material-icons">mode_edit</i></a>
        </div>

        <div className="card-content">
          <span className="card-title">John Doe</span>
        </div>
      </div>
    </div>
  )
}

export default Card;