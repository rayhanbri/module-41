import React from 'react';
import './Bottle.css'

const Bottle = ({bottle,handleAddtoCart}) => {

  const {img,name,price,stock} = bottle;

  // console.log(bottle)
  return (
    <div className='card'>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h3>${price}</h3>
      <h3>Availabe:{stock}</h3>
      <button onClick={() => handleAddtoCart(bottle)}>Buy Now</button>
      
      
    </div>
  );
};

export default Bottle;