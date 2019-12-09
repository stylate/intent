import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { CartActions } from '../actions';
import { Metadata } from '../components';

const Wrapper = styled.div``;

const fetchPricing = async (setPricing) => {
    const resp = await CartActions.getPricing();
    setPricing(resp);
}

const PricesContainer = () => {
    const dispatch = useDispatch();
    const [pricing, setPricing] = useState(null);
    const addItem = async (id) => dispatch(await CartActions.addItem(id));
    const onClickAdd = (id) => {
        const send = async () => {
            await addItem(id);
        };
        send();
    };
    useEffect(() => {
        fetchPricing(setPricing);
    }, []);
    return (
        <Wrapper>
            <Grid>
                {pricing && Object.keys(pricing).map((item) => {
                    return (<Grid.Row><Metadata data={item} action={onClickAdd} /></Grid.Row>);
                })}
            </Grid>
        </Wrapper>
    );
}

export default PricesContainer;