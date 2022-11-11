import styled from "styled-components";
import gold from "../../assets/imgs/ranking/gold.svg";
import silver from "../../assets/imgs/ranking/silver.svg";
import bronze from "../../assets/imgs/ranking/bronze.svg";
import { GetRanking } from "../../api/response";

const RankingList = () => {
  return (
    <Wrapper>
      <TopRankingWrapper>
        <TopRanking>
          <img src={gold} alt='gold' />
          <p id='name'>김대희</p>
          <p id='level'>600Lv.</p>
        </TopRanking>
        <TopRanking>
          <img src={silver} alt='silver' />
          <p id='name'>장석연</p>
          <p id='level'>550Lv.</p>
        </TopRanking>
        <TopRanking>
          <img src={bronze} alt='bronze' />
          <p id='name'>이준서</p>
          <p id='level'>500Lv.</p>
        </TopRanking>
      </TopRankingWrapper>
      <RankingWrapper>
        <p id='ranking'>4등</p>
        <p id='name'>손재민</p>
        <p id='level'>450Lv.</p>
      </RankingWrapper>
      <RankingWrapper>
        <p id='ranking'>6등</p>
        <p id='name'>문정민</p>
        <p id='level'>300Lv.</p>
      </RankingWrapper>
      <RankingWrapper>
        <p id='ranking'>7등</p>
        <p id='name'>정대현</p>
        <p id='level'>250Lv.</p>
      </RankingWrapper>
      <RankingWrapper>
        <p id='ranking'>8등</p>
        <p id='name'>김범진</p>
        <p id='level'>245Lv.</p>
      </RankingWrapper>
      <RankingWrapper>
        <p id='ranking'>9등</p>
        <p id='name'>오상우</p>
        <p id='level'>231Lv.</p>
      </RankingWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

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
