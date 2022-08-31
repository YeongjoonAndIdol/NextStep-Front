import React from "react";
import styled from "styled-components";
import checkImg from "../../../assets/imgs/time/check.svg";
import timeImg from "../../../assets/imgs/time/time.svg";

const QuestBox = () => {
  return (
    <>
      <Wrapper>
        <div>길에 떨어진 쓰레기 하나 줍기</div>
        <img src={checkImg} alt="logo" />
      </Wrapper>
    </>
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
    padding-left: 30px;
  }
  > img {
    padding-right: 52px;
  }
`;

export default QuestBox;
