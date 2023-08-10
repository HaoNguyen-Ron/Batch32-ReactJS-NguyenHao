import React from 'react';

// import './card.css';
import './card.scss';

function Card(props) {
  return (
    <div className="container">
      <div className="card">
        <div className="imgBx">
          <img
            src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
            alt="nike-air-shoe"
          />
        </div>
        <div className="contentBx">
          <h2>Nike Shoes</h2>
          <div className="size">
            <h3>Size :</h3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div className="color">
            <h3>Color :</h3>
            <span />
            <span />
            <span />
          </div>
          <a href="#">Buy Now</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
