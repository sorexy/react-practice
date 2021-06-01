import React, { useContext } from 'react';
import { TourContext } from '../TourContext.js';

function Tour(props) {
  const { name, price, href, desc, id } = props;
  const handleRemove = useContext(TourContext);
  const defaultImgSrc = "https://investorplace.com/wp-content/uploads/2021/05/shiba-inu-3.jpg";

  return (
    <article className="tour">
      <img src={href || defaultImgSrc} />
      <div className="description">
        <h4 id="title">{name}</h4>
        <div id="pricebox">
          <p id="pricetag">{price}</p>
        </div>
      </div>
      <button id={id} onClick={handleRemove} className="delete">Not Interested</button>
    </article>
  );
}


export default Tour
