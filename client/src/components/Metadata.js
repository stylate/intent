import React from "react";
import styled from "styled-components";
import { Grid, Button, Icon } from "semantic-ui-react";

const Wrapper = styled.div`
  max-width: 100%;
  width: 50vw;
`;

const Column = styled(Grid.Column)``;

const Row = styled(Grid.Row)`
  margin-top: -5%;
`;

const Header = styled.h2`
  font-size: 24px;
  margin-top: 3%;
`;

const Discount = styled.h3`
  font-size: 12px;
  color: red;
`;

export const Metadata = props => {
  const { id, data, action } = props;
  // ensure that data has description, price, and discount
  const { description, unit_price, volume_discounts } = data;
  const execute = () => {
    action(id);
  };
  return (
    <Wrapper>
      <Grid>
        <Row>
          <Column key={1} width={12}>
            <Header>{description}</Header>
          </Column>
          <Column key={2} width={4}>
            <Button icon onClick={execute}>
              <Icon name="plus" />
            </Button>
          </Column>
        </Row>
        <Row>
          <Column key={3} width={15}>
            Price per item: ${unit_price.toFixed(2)}
          </Column>
        </Row>
        {volume_discounts && volume_discounts.length != 0 ? (
          <Row>
            <Column key={4} width={15}>
              <Discount>
                Discount: {volume_discounts[0].number} pieces for $
                {volume_discounts[0].price}!
              </Discount>
            </Column>
          </Row>
        ) : (
          <div></div>
        )}
      </Grid>
    </Wrapper>
  );
};
