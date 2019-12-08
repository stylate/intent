import React from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';
import Item from './Item';

const Wrapper = styled.div``;

export const Cart = (props) => {
    const { data } = props;
    return (
        <Wrapper>
            <Grid>
                {data && data.length > 0
                    ? data.map((key) => {
                        <Grid.Row>
                            <Item />
                        </Grid.Row>
                    })
                    : <div>No items present.</div>
                }
            </Grid>
        </Wrapper>
    )
}