import React from 'react';
import { Segment } from 'semantic-ui-react';


const Cart = () => {
  return (
    <div className="grid-item" id="cart">
      <Segment>
        <h1>Cart:</h1>
        <h3 className="cart-subheader">Number of Necklaces: </h3>
        <h3 className="cart-subheader">Number of Earrings: </h3>
        <h3 className="cart-subheader">Number of Bracelets: </h3>
        <h2>Total: </h2>
      </Segment>
    </div>
  );
}

export default Cart;