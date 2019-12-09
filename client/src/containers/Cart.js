import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { CartActions } from '../actions';
import { Cart } from '../components';

const Wrapper = styled.div``;

const CartContainer = () => {
    const currState = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();
    const clear = async () => dispatch(await CartActions.clearCart());
    const { items, total } = currState;
    const itemList = Object.keys(items).map((key) => {
        return [items[key]]
    });
    const clearCart = () => {
        const send = async () => {
            await clear();
        }
        send();
    }
    return (
        <Wrapper>
            <Cart items={itemList} totalPrice={total} clear={clearCart} />
        </Wrapper>
    );
}

export default CartContainer;