import { FC } from 'react';

import {Button} from '@material-ui/core';

import { ICartItem } from '../../App';

import { Wrapper } from './CartItem.styles';

interface Props {
    item:  ICartItem;
    addToCart: (clickedItem: ICartItem) => void;
    removeFromCart: (id: number) => void
}



const CartItem: FC<Props> = ( {item, addToCart, removeFromCart} ) => {
    return (
        <Wrapper>
            <div>
                <h3>{item.title}</h3>
                <div className='information'>
                    <span>Price: ${item.price}</span>
                    <span>Total: ${item.amount * item.price}</span>
                </div>
                <div className='buttons'>
                    <Button
                    size='small'
                    onClick={() => removeFromCart(item.id)}>
                    -
                    </Button>
                    <span>{item.amount}</span>
                    <Button
                    size='small'
                    onClick={() => addToCart(item)}>
                    +
                    </Button>
                </div>
            </div>
            <img src={item.image} alt={item.title} />
        </Wrapper>
    )
}

export default CartItem;