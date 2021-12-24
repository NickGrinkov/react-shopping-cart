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
    const calculateTotal = (items: ICartItem[]) => {
        return items.reduce((acc: number, item) => acc + item.amount * item.price, 0)
    } 
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
            <h3>Total: ${calculateTotal(cartItems).toFixed(2)}</h3>
        </Wrapper>
    )
}

export default Cart;