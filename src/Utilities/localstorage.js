

const  getCartFromLocalStorage=()=>{
  const storedCartString = localStorage.getItem('cart');

  if(storedCartString){
    const  storedCart = JSON.parse(storedCartString);
    return storedCart
  }
  return [];

}


const  saveCartToLocalStorage =(cart) =>{
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart',cartStringified)
  
}



const addItemtoLocalStorage = (id) => {

  const cart = getCartFromLocalStorage();
  const newCart = [...cart,id]
  saveCartToLocalStorage(newCart);

}

const removeFromLocalStorage  = id =>{
  const storeCart =  getCartFromLocalStorage ();
  const remainingCart= storeCart.filter(storeId => storeId !== id);
  saveCartToLocalStorage(remainingCart)
}



export{getCartFromLocalStorage as getStoreCart,
  addItemtoLocalStorage as addToStoreCart,
  removeFromLocalStorage as removeFromCart
}