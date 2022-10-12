import React from "react";
import styled from "styled-components";
import QuestBox from "./QuestBox";
import { Link } from "react-router-dom";
import BottomFixedBtn from "../../common/BottomFixedBtn";
const QuestList = () => {
  return (
    <Wrapper>
      <Body>
        <QuestBox />
        <QuestBox />
        <QuestBox />
        <QuestBox />
        <QuestBox />
        <QuestBox />
        <QuestBox />
        <QuestBox />
        <QuestBox />
        <QuestBox />
        <QuestBox />
        <QuestBox />
        <QuestBox />
      </Body>
      <Link to='/recommen'>
        <BottomFixedBtn height={54} value='추천 퀘스트' />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default QuestList;
