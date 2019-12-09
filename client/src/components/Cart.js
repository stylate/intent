import React from 'react';
import styled from 'styled-components';
import { Grid, Button } from 'semantic-ui-react';

import { Item } from './Item';

const Wrapper = styled.div``;

const Header = styled.div`
    margin-top: 2%;
    font-size: 14px;
`;

const Results = styled.div`
    margin-left: 5%;
`;

export const Cart = (props) => {
    const { items, totalPrice, clear } = props;
    return (
        <Wrapper>
            <h1>Shopping Cart</h1>
            <Grid>
                {items && items.length > 0
                    ? items.map((item, idx) => {
                        const { count, description, total } = item[0];
                        return (
                            <Grid.Row key={idx}>
                                <Item key={idx} count={count} description={description} total={total} />
                            </Grid.Row>
                        );
                    })
                    : <Grid.Row>
                        <Results>
                            <Header>No items present.</Header>
                        </Results>
                    </Grid.Row>
                }
                <Results>
                    <Grid.Row>
                        <Button onClick={clear}>
                            Clear Cart
                        </Button>
                    </Grid.Row>
                    <Grid.Row>
                        Total: ${totalPrice.toFixed(2)}
                    </Grid.Row>
                </Results>
            </Grid>
        </Wrapper>
    )
}