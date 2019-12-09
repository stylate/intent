import React from 'react';
import styled from 'styled-components';
import { Grid, Button, Icon } from 'semantic-ui-react';


export const Metadata = (props) => {
    const { id, data, action } = props;
    // ensure that data has description, price, and discount
    console.log(data);
    const { description, unit_price, volume_discounts} = data;
    const execute = () => {
        action(id);
    }
    return (
        <div>
            {description}
            {unit_price}
            <Button icon onClick={execute}>
                <Icon name='plus' />
            </Button>
        </div>
    );
};