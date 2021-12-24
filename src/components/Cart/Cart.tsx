import {FC} from 'react';

import CartItem from "../CartItem/CartItem";

import { Wrapper } from "./Cart.styles";

import { ICartItem } from "../../App";

interface Props {
    cartItems:  ICartItem[];
    addToCart: (clickedItem: ICartItem) => void;
    removeFromCart: (id: number) => void
}


const Cart: FC<Props> = ({ cartItems,  addToCart, removeFromCart}) => {
    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            <p>{cartItems.length === 0 ? 'Add something to Cart' : null}</p>
            {cartItems.map(item => (
                <CartItem 
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
        </Wrapper>
    )
}

export default Cart;