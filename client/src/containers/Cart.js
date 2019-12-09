import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { CartActions } from '../actions';
import { Cart } from '../components';

const Wrapper = styled.div``;

const CartContainer = () => {
    const currState = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();
    const clearCart = () => dispatch(CartActions.clearCart());
    const { items, total } = currState;
    const itemList = Object.keys(items).map((key) => {
        return [items[key]]
    });
    return (
        <Wrapper>
            <Cart items={itemList} totalPrice={total} clear={clearCart} />
        </Wrapper>
    );
}

export default CartContainer;