import React from "react";
import styled from "styled-components";
import RankingList from "./RankingList";

const Ranking = () => {
  return (
    <Wrapper>
      <Header>
        <div className='title'>명예의 전당</div>
        <div className='menu'>
          <p id='ranking'>등수</p>
          <p id='name'>이름</p>
          <p id='level'>레벨</p>
        </div>
      </Header>
      <RankingList />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Header = styled.div`
  padding-bottom: 11px;
  .title {
    padding: 37px 0 37px 40px;
    font-size: ${({ theme }) => theme.font_size.SF_Pro18};
    font-weight: 590;
    color: ${({ theme }) => theme.color.bg_color_off};
  }
  .menu {
    display: flex;
    #ranking {
      margin: 0;
      padding: 0 28px 0 30px;
      font-size: ${({ theme }) => theme.font_size.SF_Pro12};
      font-weight: 400;
      color: ${({ theme }) => theme.color.gray_color3};
    }
    #name {
      margin: 0;
      padding-right: 248px;
      font-size: ${({ theme }) => theme.font_size.SF_Pro12};
      font-weight: 400;
      color: ${({ theme }) => theme.color.gray_color3};
    }
    #level {
      margin: 0;
      font-size: ${({ theme }) => theme.font_size.SF_Pro12};
      font-weight: 400;
      color: ${({ theme }) => theme.color.gray_color3};
    }
  }
`;

export default Ranking;
