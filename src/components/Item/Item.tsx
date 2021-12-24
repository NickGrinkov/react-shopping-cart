import React, {FC} from 'react';

import {Button} from '@material-ui/core'

import { ICartItem } from '../../App'

import { Wrapper } from './Item.styles'

interface ItemProps {
    item: ICartItem,
    handleAddToCart: (clickedItem: ICartItem) => void
}

const Item: FC<ItemProps> = ({ item,  handleAddToCart}) => (
    <Wrapper>
        <img src={item.image} alt={item.title}/>
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span>{item.price}</span>
        </div>
        <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
)

export default Item;