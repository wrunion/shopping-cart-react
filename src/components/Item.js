import React from 'react';
import PropTypes from 'prop-types';

function Item(props){
  return (
      <div onClick = {() => props.itemClick(props.id)}>
        <h3 className="ticket-header">{props.name} : {props.price}</h3>
        <p><em>{props.description}</em></p>
      </div>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  itemClick: PropTypes.func
}

export default Item;