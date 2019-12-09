import React from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

import { Item } from './Item';

const Wrapper = styled.div``;

export const Cart = (props) => {
    const { items, totalPrice, clear } = props;
    console.log("cart props: ", props);
    return (
        <Wrapper>
            <Grid>
                {items && items.length > 0
                    ? items.forEach((item, idx) => {
                        const { count, description, total} = item[0];
                        return (
                            <Grid.Row key={idx}>
                                <Item key={idx} count={count} description={description} total={total} />
                            </Grid.Row>
                        );
                    })
                    : <div>No items present.</div>
                }
            </Grid>
            {totalPrice}
        </Wrapper>
    )
}