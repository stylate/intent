import React from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

const ItemBox = styled.div`
    margin-top: 5%;
    margin-left: 10%;
    width: 30vw;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    border-radius: 5px; 
`;

export const Item = (props) => {
    const { count, description, total } = props;
    console.log("props: ", props);
    return (
        <ItemBox>
            <Grid>
                <Grid.Column width={5}>{description}</Grid.Column>
                <Grid.Column width={4}>Count: {count}</Grid.Column>
                <Grid.Column width={2}>${total.toFixed(2)}</Grid.Column>
            </Grid>
        </ItemBox>
    )
}