import React from "react";
import styled from "styled-components";
import { Grid } from "semantic-ui-react";

import { Item } from "./Item";
import { Results } from "./Results";

const Header = styled.div`
  margin-top: 2%;
  margin-left: 4%;
  font-size: 14px;
`;

export const Cart = props => {
  const { items, totalPrice, clear } = props;
  return (
    <div>
      <h1>Shopping Cart</h1>
      <Grid>
        {items && items.length > 0 ? (
          items.map((item, idx) => {
            const { count, description, total } = item[0];
            return (
              <Grid.Row key={idx}>
                <Item
                  key={idx}
                  count={count}
                  description={description}
                  total={total}
                />
              </Grid.Row>
            );
          })
        ) : (
          <Grid.Row>
            <Header>No items present.</Header>
          </Grid.Row>
        )}
        <Results totalPrice={totalPrice} clear={clear} />
      </Grid>
    </div>
  );
};
