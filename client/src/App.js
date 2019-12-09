import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import { Grid, GridColumn } from 'semantic-ui-react';
import './App.css';

import Cart from './containers/Cart';
import Prices from './containers/Prices';

const Wrapper = styled.div`
  width: 100%;
  margin-left: 25%;
  margin-top: 10%;
`;

const App = () => {
  return (
    <Wrapper>
      <Grid>
          <Grid.Column width={4}><Cart /></Grid.Column>
          <Grid.Column width={5}><Prices /></Grid.Column>
      </Grid>
    </Wrapper>
  );
}

export default App;
