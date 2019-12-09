import React from 'react';
import styled from 'styled-components';
import { Grid, Button, Icon } from 'semantic-ui-react';

export const Metadata = (props) => {
    const { id, data, action } = props;
    // ensure that data has description, price, and discount
    const { description, unit_price, volume_discounts} = data;
    const execute = () => {
        action(id);
    }
    return (
        <div>
            <Grid.Column width={9}>{description}</Grid.Column>
            <Grid.Column width={4}>{unit_price}</Grid.Column>
            <Grid.Column width={2}>
                <Button icon onClick={execute}>
                    <Icon name='plus' />
                </Button>
            </Grid.Column>
        </div>
    );
};