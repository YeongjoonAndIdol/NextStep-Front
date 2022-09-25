import React from "react";
import styled from "styled-components";
import gold from "../../assets/imgs/ranking/gold.svg";
import silver from "../../assets/imgs/ranking/silver.svg";
import bronze from "../../assets/imgs/ranking/bronze.svg";

const MyRanking = () => {
  return (
    <MyRankingWrapper>
      <MyRankingNum>99등</MyRankingNum>
      <MyRankingName>전영준</MyRankingName>
      <MyRankingLevel>100Lv.</MyRankingLevel>
    </MyRankingWrapper>
  );
};

const RankingUser = () => {
  return (
    <RankingWrapper>
      <p id='ranking'>4등</p>
      <p id='name'>이정윤</p>
      <p id='level'>500Lv.</p>
    </RankingWrapper>
  );
};

const RankingList = () => {
  return (
    <Wrapper>
      <MyRanking />
      <TopRankingWrapper>
        <TopRanking>
          <img src={gold} alt='gold' />
          <p id='name'>김승진</p>
          <p id='level'>512Lv.</p>
        </TopRanking>
        <TopRanking>
          <img src={silver} alt='silver' />
          <p id='name'>채희성</p>
          <p id='level'>510Lv.</p>
        </TopRanking>
        <TopRanking>
          <img src={bronze} alt='bronze' />
          <p id='name'>장석연</p>
          <p id='level'>505Lv.</p>
        </TopRanking>
      </TopRankingWrapper>
      <RankingUser />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

// MyRanking Style
const MyRankingWrapper = styled.div`
  width: 100%;
  height: 20px;
  padding: 16px 28px;
  background-color: ${({ theme }) => theme.color.main};
  display: flex;
  align-items: center;
`;

const MyRankingNum = styled.div`
  padding-right: 15px;
  font-size: ${({ theme }) => theme.font_size.SF_Pro14};
  font-weight: 590;
  color: ${({ theme }) => theme.color.surface_color};
`;

const MyRankingName = styled.div`
  padding-right: 230px;
  font-size: ${({ theme }) => theme.font_size.SF_Pro16};
  font-weight: 590;
  color: ${({ theme }) => theme.color.surface_color};
`;

const MyRankingLevel = styled.div`
  font-size: ${({ theme }) => theme.font_size.SF_Pro16};
  font-weight: 590;
  color: ${({ theme }) => theme.color.surface_color};
`;

// Ranking Styleß

const TopRankingWrapper = styled.div`
  padding-top: 20px;
`;

const TopRanking = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  > img {
    width: 28px;
    height: 28px;
    padding: 0 22px 0 30px;
  }
  #name {
    padding-right: 226px;
    font-size: ${({ theme }) => theme.font_size.SF_Pro16};
    font-weight: 590;
    color: ${({ theme }) => theme.color.bg_color_off};
  }
  #level {
    font-size: ${({ theme }) => theme.font_size.SF_Pro16};
    font-weight: 590;
    color: ${({ theme }) => theme.color.bg_color_off};
  }
`;

const RankingWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  #ranking {
    padding: 0 29px 0 30px;
    font-size: ${({ theme }) => theme.font_size.SF_Pro14};
    font-weight: 590;
    color: ${({ theme }) => theme.color.bg_color_off};
  }
  #name {
    padding-right: 226px;
    font-size: ${({ theme }) => theme.font_size.SF_Pro16};
    font-weight: 590;
    color: ${({ theme }) => theme.color.bg_color_off};
  }
  #level {
    font-size: ${({ theme }) => theme.font_size.SF_Pro16};
    font-weight: 590;
    color: ${({ theme }) => theme.color.bg_color_off};
  }
`;

export default RankingList;