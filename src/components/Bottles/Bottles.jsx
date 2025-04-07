import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToStoreCart, getStoreCart, removeFromCart } from '../../Utilities/localstorage';
import Cart from '../Cart/Cart';

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

     const  handleRemoveFromCart = id =>{
      console.log('remove item from the cart',id)

      const  remainingCart = cart.filter(bottle => bottle.id !== id);
      setCart(remainingCart)
      removeFromCart(id);
     }

    //  console.log(bottles)
  return (
    <div >
      <h3>Total Bottle:{bottles.length}</h3>
      <h2>Added To Cart:{cart.length}</h2>
      <Cart cart ={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div className='bottles-container'>
      {
        bottles.map(bottle => <Bottle key={bottle.id} handleAddtoCart={handleAddtoCart} bottle={bottle}></Bottle>)
      }
      </div>
    </div>
  );
};

export default Bottles;