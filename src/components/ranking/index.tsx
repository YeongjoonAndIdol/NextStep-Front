import { useState, useEffect } from "react";
import styled from "styled-components";
import { GetRanking } from "../../api";
import { IGetRanking } from "../../api/response";
import RankingList from "./RankingList";

const Ranking = () => {
  const [data, setData] = useState<IGetRanking>();

  useEffect(() => {
    GetRanking().then(res => setData(res));
  }, []);

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
      <MyRankingWrapper>
        <p id='ranking'>{data?.my_ranking.ranking}</p>
        <p id='name'>{data?.my_ranking.name}</p>
        <p id='level'>{data?.my_ranking.level}Lv.</p>
      </MyRankingWrapper>
      {data?.userRanking.map(data => (
        <RankingList
          id={data.id}
          level={data.level}
          name={data.name}
          ranking={data.ranking}
        />
      ))}
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

// MyRanking Style
const MyRankingWrapper = styled.div`
  width: 100%;
  height: 54px;
  background-color: ${({ theme }) => theme.color.main};
  display: flex;
  align-items: center;
  #ranking {
    padding: 0 25px 0 18px;
    font-size: ${({ theme }) => theme.font_size.SF_Pro14};
    font-weight: 590;
    color: ${({ theme }) => theme.color.bg_color_on};
  }
  #name {
    padding-right: 226px;
    font-size: ${({ theme }) => theme.font_size.SF_Pro16};
    font-weight: 590;
    color: ${({ theme }) => theme.color.bg_color_on};
  }
  #level {
    font-size: ${({ theme }) => theme.font_size.SF_Pro16};
    font-weight: 590;
    color: ${({ theme }) => theme.color.bg_color_on};
  }
`;

export default Ranking;
