import { useState } from "react";
import styled from "styled-components";
import RecommenBox from "../box/RecommenBox";

const RecommenList = () => {
  return (
    <Wrapper>
      <Body>
        <RecommenBox />
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Body = styled.div`
  padding-bottom: 10px;
`;

export default RecommenList;
