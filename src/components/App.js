import React from 'react';
// import HeaderImage from './Header/Header';
import DummyHeader from './Header/DummyHeader';
import ItemControl from './ItemControl/ItemControl';
import CartControl from './CartControl/CartControl';
import './../App.css';

function App(){
  return (
    <React.Fragment>
        {/* <HeaderImage /> */}
        <DummyHeader />
        <ItemControl />
        <CartControl />
    </React.Fragment>
  );
}

export default App;




{/* <div class="shoparea"><ShopList items={sampleItems} /></div>
<div class="cartarea"><CartList cart={this.state.cart} /></div> */}