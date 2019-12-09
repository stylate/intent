import React from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

const Wrapper = styled.div``;

export const Cart = (props) => {
    const { items, totalPrice } = props;
    console.log("items: ", items);
    return (
        <Wrapper>
            <Grid>
                {items && items.length > 0
                    ? items.forEach((item) => {
                        const { count, description, total} = item[0];
                        return (
                            <Grid.Row>
                                <Grid.Column>Count: {count}</Grid.Column>
                                <Grid.Column>Description: {description}</Grid.Column>
                                <Grid.Column>Total: {total}</Grid.Column>
                            </Grid.Row>
                        );
                    })
                    : <div>No items present.</div>
                }
            </Grid>
        </Wrapper>
    )
}