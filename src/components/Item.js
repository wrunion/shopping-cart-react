import React from 'react';
import { Segment, Button } from 'semantic-ui-react';
// import PropTypes from 'prop-types';

function Item(props){
  return (
      <Segment>
        <h3 className="ticket-header">{props.name} : ${props.price}</h3>
        <p><em>{props.description}</em></p>
        <Button type="button" color="teal">Add to cart</Button>
      </Segment>
  );
}

// Item.propTypes = {
//   name: PropTypes.string,
//   price: PropTypes.number,
//   id: PropTypes.string,
//   itemClick: PropTypes.func
// }

export default Item;