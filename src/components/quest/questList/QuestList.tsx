import React from "react";
import styled from "styled-components";
import QuestBox from "./QuestBox";
import arrow from "../../../assets/imgs/common/leftArrow.svg";
import plus from "../../../assets/imgs/common/plus.svg";
import { Link } from "react-router-dom";
import BottomFixedBtn from "../../common/BottomFixedBtn";
const QuestList = () => {
  return (
    <Wrapper>
      <Header>
        <img id="arrow" src={arrow} alt="leftArrow" />
        <div className="headerName">퀘스트 목록</div>
        <img id="plus" src={plus} alt="plus" />
      </Header>
      <Body>
        <QuestBox />
      </Body>
      <Link to="/recommen">
        <BottomFixedBtn height={54} value="추천 퀘스트" />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  #arrow {
    padding-left: 15px;
  }
  #plus {
    padding-right: 15px;
  }
  > div {
    color: ${({ theme }) => theme.color.bg_color_off};
    font-size: ${({ theme }) => theme.font_size.SF_Pro18};
    font-weight: 590;
  }
`;

const Body = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 56px;
`;

export default QuestList;
