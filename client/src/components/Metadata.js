import React from 'react';
import styled from 'styled-components';
import { Grid, Button, Icon } from 'semantic-ui-react';


export const Metadata = (props) => {
    const { data, action } = props;
    // ensure that data has description, price, and discount
    console.log("data: ", data);
    return (
        <div>
            <Button icon onClick={action}>
                <Icon name='plus' />
            </Button>
        </div>
    );
};