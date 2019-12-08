import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { CartActions } from '../actions';

const Wrapper = styled.div``;

const PricesContainer = () => {
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
            <Grid>
                {pricing && pricing.map((item) => {
                    <Grid.Row><Metadata data={item} action={onClickAdd} /></Grid.Row>
                })}
            </Grid>
        </Wrapper>
    );
}

export default PricesContainer;