import React from "react";
import styled from "styled-components";
import X from "../../assets/imgs/search/x.svg";

const SearchBox = () => {
  return (
    <Wrapper>
      <div>서울대생 하루 루틴</div>
      <img src={X} alt="x" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    color: ${({ theme }) => theme.color.bg_color_off};
    font-size: ${({ theme }) => theme.font_size.SF_Pro16};
    font-weight: 590;
    padding-left: 20px;
  }
  > img {
    padding-right: 26px;
  }
`;

export default SearchBox;
