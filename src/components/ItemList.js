import React from 'react';
import Item from './Item';
import { Segment } from 'semantic-ui-react';

const masterItemList = [
  {
    name: 'Necklace',
    price: 16,
    description: 'Handmade necklace',
    id: 1
  },
  {
    name: 'Earrings', 
    price: 23,
    description: 'Unique earrings handmade with recycled materials',
    id: 2
  },
  {
    name: 'Bracelet',
    price: 30,
    description: 'Charming silver charm bracelet',
    id: 3
  }
]

const ItemList = () => {
  return (
    <Segment>
      <div id="itemlist">
        {masterItemList.map((item, index) => 
        <Item 
          name = {item.name}
          price = {item.price}
          description = {item.description} 
          key = {item.id} />
        )}
      </div>
    </Segment>
  )
}

export default ItemList;