import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Cart } from '../components';

const Wrapper = styled.div``;

const CartContainer = () => {
    const currState = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();
    const { items, total } = currState;
    const itemList = Object.keys(items).map((key) => {
        return [items[key]]
    });
    return (
        <Wrapper>
            <Cart items={itemList} totalPrice={total} />
        </Wrapper>
    );
}

export default CartContainer;