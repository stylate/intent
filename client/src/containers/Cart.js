import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { CartActions } from '../actions';
import { Items } from '../components';

const Wrapper = styled.div``;

const CartContainer = () => {
    const currState = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();
    return (
        <Wrapper>

        </Wrapper>
    );
}

export default CartContainer;