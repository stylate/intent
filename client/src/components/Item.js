import React from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

const Wrapper = styled.div``;

export const Item = (props) => {
    const { count, description, total } = props;
    console.log("props: ", props);
    return (
        <Wrapper>
            <Grid.Column>Count: {count}</Grid.Column>
            <Grid.Column>Description: {description}</Grid.Column>
            <Grid.Column>Total: {total}</Grid.Column>
        </Wrapper>
    )
}