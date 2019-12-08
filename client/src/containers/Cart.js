import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { CartActions } from '../actions';
import { Items } from '../components';

const Wrapper = styled.div``;

const CartContainer = async () => {
    const currState = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();
    const addItem = async (id) => dispatch(await CartActions.addItem(id));
    const onClickAdd = (id) => {
        const send = async () => {
            await addItem(id);
        };
        send();
    };
    const pricing = await CartActions.getPricing();
    console.log("pricing: ", pricing)
    return (
        <Wrapper>

        </Wrapper>
    );
}

export default CartContainer;