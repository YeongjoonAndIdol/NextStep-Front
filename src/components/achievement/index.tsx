import styled from "styled-components";
import { useState } from "react";
import leftArrow from "../../assets/imgs/common/leftArrow.svg";
import recall from "../../assets/imgs/Achievement/recall.svg";
import Week from "./Week";
import AchievementBox from "./AchievementBox";

const Achievement = () => {
  return (
    <Wrapper>
      <Hedaer>
        <img id='exit' src={leftArrow} alt='exit' />
        <p id='title'>성취도</p>
        <img id='recall' src={recall} alt='recall' />
      </Hedaer>
      <WeekDiv>
        <Week />
      </WeekDiv>
      <TitleDiv>
        <p>서울대생의 하루 루틴</p>
      </TitleDiv>
      <LogDiv>
        <AchievementBox />
      </LogDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 31px;
`;

const Hedaer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0px 77px;
  #title {
    font-size: ${({ theme }) => theme.font_size.SF_Pro20};
    font-weight: 590;
    color: ${({ theme }) => theme.color.bg_color_off};
  }
`;

const WeekDiv = styled.div`
  width: 342px;
  padding-bottom: 38px;
  display: flex;
  justify-content: space-between;
`;

const TitleDiv = styled.div`
  padding-bottom: 20px;
  > p {
    margin: 0;
    font-weight: 590;
    font-size: ${({ theme }) => theme.font_size.SF_Pro16};
    color: ${({ theme }) => theme.color.main};
  }
`;

const LogDiv = styled.div``;

export default Achievement;
