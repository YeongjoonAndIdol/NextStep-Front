import React from "react";
import styled from "styled-components";
import QuestBox from "./QuestBox";
import vector from "../../../assets/imgs/common/vector.svg";
import plus from "../../../assets/imgs/common/plus.svg";
import Button from "../../common/button";

const QuestList = () => {
  return (
    <Wrapper>
      <Haeder>
        <img id="vector" src={vector} alt="vector" />
        <div className="haederName">퀘스트 목록</div>
        <img id="plus" src={plus} alt="plus" />
      </Haeder>
      <Body>
        <QuestBox />
        <Button height={54} value="추천 퀘스트" />
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 10px;
`;

const Haeder = styled.div`
  display: flex;
  justify-content: space-between;
  > #vector {
    padding-left: 31px;
  }
  > #plus {
    padding-right: 31px;
  }
  > div {
    color: ${({ theme }) => theme.color.bg_color_off};
    font-size: ${({ theme }) => theme.font_size.SF_Pro18};
    font-weight: 590;
  }
`;

const Body = styled.div`
  padding-top: 56px;
  padding-bottom: 10px;
  > input {
    position: fixed;
    top: 760px;
  }
`;

export default QuestList;
