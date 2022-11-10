import styled from "styled-components";
import gold from "../../assets/imgs/ranking/gold.svg";
import silver from "../../assets/imgs/ranking/silver.svg";
import bronze from "../../assets/imgs/ranking/bronze.svg";
import { GetRanking } from "../../api/response";

const RankingList = () => {
  const UserData = [
    { ranking: 1, name: "김대희", level: 200 },
    { ranking: 2, name: "장석연", level: 150 },
    { ranking: 3, name: "이준서", level: 100 },
    { ranking: 4, name: "손재민", level: 75 },
  ];

  return (
    <Wrapper>
      <TopRankingWrapper>
        <TopRanking>
          <img src={gold} alt='gold' />
          <p id='name'></p>
          <p id='level'>Lv.</p>
        </TopRanking>
        <TopRanking>
          <img src={silver} alt='silver' />
          <p id='name'></p>
          <p id='level'>Lv.</p>
        </TopRanking>
        <TopRanking>
          <img src={bronze} alt='bronze' />
          <p id='name'></p>
          <p id='level'>Lv.</p>
        </TopRanking>
      </TopRankingWrapper>
      <RankingWrapper>
        <p id='ranking'>등</p>
        <p id='name'></p>
        <p id='level'>Lv.</p>
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
