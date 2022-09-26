import React from "react";
import styled from "styled-components";
import leftArrow from "../../assets/imgs/common/leftArrow.svg";
import MyQuest from "./MyQuest";
import QuestMold from "./QuestMold";

const Settings = () => {
  return (
    <Wrapper>
      <Header>
        <img id='exit' src={leftArrow} alt='exit' />
        <div className='title'>설정</div>
      </Header>
      <MenuWrapper>
        <NameDiv>
          <p id='name'>이름</p>
          <p id='userName'>장석연</p>
        </NameDiv>
        <QuestDiv>
          <QuestHeader>
            <p id='title'>내가 좋아요한 퀘스트</p>
            <p id='number'>1개</p>
          </QuestHeader>
          <QuestMold />
        </QuestDiv>
        <TutorialDiv>
          <p id='restart'>튜토리얼 재진행</p>
          <p id='start'>시작</p>
        </TutorialDiv>
        <MyQuestDiv>
          <p id='title'>나의 퀘스트</p>
          <MyQuest />
        </MyQuestDiv>
        <LogOutDiv>
          <p>로그아웃</p>
        </LogOutDiv>
      </MenuWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 31px 90px;
  .title {
    padding-left: 150px;
    font-size: ${({ theme }) => theme.font_size.SF_Pro20};
    font-weight: 590;
    color: ${({ theme }) => theme.color.bg_color_off};
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const NameDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  height: 30px;
  border-radius: 10px;
  padding: 12px 14px 12px;
  background-color: ${({ theme }) => theme.color.gray_color5};
  #name {
    font-size: ${({ theme }) => theme.font_size.SF_Pro16};
    font-weight: 400;
    color: black;
  }
  #userName {
    font-size: ${({ theme }) => theme.font_size.SF_Pro14};
    font-weight: 400;
    color: ${({ theme }) => theme.color.bg_color_off};
  }
`;

const QuestDiv = styled.div`
  background-color: ${({ theme }) => theme.color.gray_color5};
  width: 340px;
  border-radius: 10px;
  padding: 14px 12px 14px 14px;
`;

const QuestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  #title {
    margin: 0;
    font-size: ${({ theme }) => theme.font_size.SF_Pro16};
    font-weight: 400;
    color: black;
  }
  #number {
    margin: 0;
    font-size: ${({ theme }) => theme.font_size.SF_Pro14};
    font-weight: 400;
    color: ${({ theme }) => theme.color.bg_color_off};
  }
`;

const TutorialDiv = styled.div`
  width: 340px;
  height: 30px;
  border-radius: 10px;
  padding: 12px 14px 12px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.gray_color5};
  #restart {
    margin: 0;
    font-size: ${({ theme }) => theme.font_size.SF_Pro16};
    font-weight: 400;
    color: black;
  }
  #start {
    margin: 0;
    font-size: ${({ theme }) => theme.font_size.SF_Pro14};
    font-weight: 400;
    color: ${({ theme }) => theme.color.bg_color_off};
  }
`;

const MyQuestDiv = styled.div`
  background-color: ${({ theme }) => theme.color.gray_color5};
  width: 340px;
  border-radius: 10px;
  padding: 14px;
  #title {
    margin: 0;
    font-size: ${({ theme }) => theme.font_size.SF_Pro16};
    font-weight: 400;
    color: black;
  }
`;

const LogOutDiv = styled.div`
  width: 340px;
  height: 30px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.error_color};
  display: flex;
  align-items: center;
  > p {
    font-size: ${({ theme }) => theme.font_size.SF_Pro16};
    font-weight: 400;
    color: ${({ theme }) => theme.color.surface_color};
  }
`;

export default Settings;
