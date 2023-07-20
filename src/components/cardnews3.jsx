import "../styles/cardnews3.scss";
import { Link } from 'react-router-dom';
import React from 'react';
import  ICONTAG  from './icontag';

function CARDNEWS3({ data }) {
  return (
    
    <>
      <Link to={`/article/${data.id}`} key={data.id}>
      <div className="cardnews_3 card mt-4">
        <div className="row no-gutters">
          <div className="card-top p-0 d-flex align-items-center">
            <img
              className="cardnews_3-img object-fit-cover"
              src={data.imageUrl}
              alt="Suresh Dasari Card"
            />
            <div className="card-overlay"></div>
            <ICONTAG icon={data.icon} className="cardnews_3-logo" />
          </div>
          <div className="card-body">
            <h2 className="cardnews_3-title pb-2">{data.title}</h2>
            <span className="cardnews_3-Date">12/12/20022</span>
          </div>
          <div className="cardnews_3-filter"></div>
        </div>
      </div>
    </Link>
  
    </>
  );
}

export default CARDNEWS3;