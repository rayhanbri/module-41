import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToStoreCart, getStoreCart } from '../../Utilities/localstorage';

const Bottles = ({bottlesPromise}) => {

  const [cart,setCart] = useState([]);




     const bottles = use(bottlesPromise);


    //  use Effect 
    useEffect(() => {
      const storedCartIds = getStoreCart();
      // console.log(storedCartIds,bottles)
      const storedCart = [];
      for(const id of storedCartIds){
        // console.log(id);
        const cartBottle = bottles.find(bottle => bottle.id === id)
        if(cartBottle){
          storedCart.push(cartBottle)

        }
      }
      setCart(storedCart);



    },[bottles])

     const  handleAddtoCart = (bottle) =>{
      // console.log('clicked',bottle)
      const newCart = [...cart,bottle]
      setCart(newCart)
    // save the bottle id in the storage 
    addToStoreCart(bottle.id);


     }

    //  console.log(bottles)
  return (
    <div >
      <h3>Total Bottle:{bottles.length}</h3>
      <h2>Added To Cart:{cart.length}</h2>
      <div className='bottles-container'>
      {
        bottles.map(bottle => <Bottle key={bottle.id} handleAddtoCart={handleAddtoCart} bottle={bottle}></Bottle>)
      }
      </div>
    </div>
  );
};

export default Bottles;