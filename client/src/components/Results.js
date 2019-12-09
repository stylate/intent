import React from 'react';
import styled from 'styled-components';
import { Grid, Button } from 'semantic-ui-react';

const Wrapper = styled.div`
    width: 70vw;
    margin-left: 6%;
`;

export const Results = (props) => {
    const { totalPrice, clear } = props;
    return (
        <Wrapper>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <Button onClick={clear}>
                            Clear Cart
                        </Button>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        Total: ${totalPrice.toFixed(2)}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Wrapper>
    );
}