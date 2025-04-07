import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = ({bottlesPromise}) => {

  const [cart,setCart] = useState([]);


     const bottles = use(bottlesPromise);

     const  handleAddtoCart = (bottle) =>{
      console.log('clicked',bottle.name)
     }

    //  console.log(bottles)
  return (
    <div >
      <h3>Total Bottle:{bottles.length}</h3>
      <div className='bottles-container'>
      {
        bottles.map(bottle => <Bottle key={bottle.id} handleAddtoCart={handleAddtoCart} bottle={bottle}></Bottle>)
      }
      </div>
    </div>
  );
};

export default Bottles;