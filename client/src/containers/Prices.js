import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { CartActions } from '../actions';
import { Metadata } from '../components';

const MetaBox = styled.div`
    margin-top: 5%;
    margin-left: 10%;
    width: 20%;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    border-radius: 5px; 
`;

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
    useEffect(() => { fetchPricing(setPricing); }, []);
    return (
        <MetaBox>
            <Grid>
                {pricing && Object.keys(pricing).map((item) => {
                    return (
                        <Grid.Row key={item} columns={3}>
                            <Metadata key={item} id={item} data={pricing[item]} action={onClickAdd} />
                        </Grid.Row>
                    );
                })}
            </Grid>
        </MetaBox>
    );
}

export default PricesContainer;