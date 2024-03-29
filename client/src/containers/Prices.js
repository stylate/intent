import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Grid } from "semantic-ui-react";
import { CartActions } from "../actions";
import { Metadata } from "../components";

const Wrapper = styled.div`
  margin-left: 10%;
`;

const MetaBox = styled.div`
  width: 18vw;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  border-radius: 5px;
`;

const Row = styled(Grid.Row)`
  margin-top: 8%;
`;

const Header = styled.h2`
  font-size: 20px;
`;

const fetchPricing = async setPricing => {
  const resp = await CartActions.getPricing();
  setPricing(resp);
};

const PricesContainer = () => {
  const dispatch = useDispatch();
  const [pricing, setPricing] = useState(null);
  const addItem = async id => dispatch(await CartActions.addItem(id));
  const onClickAdd = id => {
    const send = async () => {
      await addItem(id);
    };
    send();
  };
  useEffect(() => {
    fetchPricing(setPricing);
  }, []);
  return (
    <Wrapper>
      <Grid>
        <Grid.Row key={1}>
          <Header>Add to Cart</Header>
        </Grid.Row>
        <MetaBox>
          {pricing &&
            Object.keys(pricing).map(item => {
              return (
                <Row key={item}>
                  <Metadata
                    key={item}
                    id={item}
                    data={pricing[item]}
                    action={onClickAdd}
                  />
                </Row>
              );
            })}
        </MetaBox>
      </Grid>
    </Wrapper>
  );
};

export default PricesContainer;
