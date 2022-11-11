import styled from "styled-components";
import onHeart from "../../../../assets/imgs/quest/onHeart.svg";
import offHeart from "../../../../assets/imgs/quest/offHeart.svg";
import { outLink } from "../../../../bridge";
import RecommenBox from "../box/RecommenBox";
import { off } from "process";

const RecommenList = () => {
  /*
  useEffect(() => {
    GetRecommendList().then(res => setData(res));
  }, []);
*/

  const onClickList = () => {
    outLink("modal");
  };

  return (
    <Wrapper>
      <Body>
        <RecommenBox onClick={onClickList} />
        <SearchBox>
          <QuestName>대마고 학생의 하루 루틴</QuestName>
          <HeartBox>
            <img id='heart' src={offHeart} alt='heartBtn' />
            <LikeCount>999</LikeCount>
          </HeartBox>
        </SearchBox>
        <SearchBox>
          <QuestName>우송대생의 코딩 루틴</QuestName>
          <HeartBox>
            <img id='heart' src={offHeart} alt='heartBtn' />
            <LikeCount>999</LikeCount>
          </HeartBox>
        </SearchBox>
        <SearchBox>
          <QuestName>NextStep 개발자의 하루 루틴</QuestName>
          <HeartBox>
            <img id='heart' src={offHeart} alt='heartBtn' />
            <LikeCount>259</LikeCount>
          </HeartBox>
        </SearchBox>
        <SearchBox>
          <QuestName>오늘부터 나도 갬성충 독서 루틴</QuestName>
          <HeartBox>
            <img id='heart' src={offHeart} alt='heartBtn' />
            <LikeCount>332</LikeCount>
          </HeartBox>
        </SearchBox>
        <SearchBox>
          <QuestName>건물주 되고 싶은 들들 이거 하삼</QuestName>
          <HeartBox>
            <img id='heart' src={offHeart} alt='heartBtn' />
            <LikeCount>323</LikeCount>
          </HeartBox>
        </SearchBox>
        <SearchBox>
          <QuestName>하루 30분 다이어트</QuestName>
          <HeartBox>
            <img id='heart' src={offHeart} alt='heartBtn' />
            <LikeCount>459</LikeCount>
          </HeartBox>
        </SearchBox>
        <SearchBox>
          <QuestName>k본부 기자의 재벌 성공 루틴</QuestName>
          <HeartBox>
            <img id='heart' src={offHeart} alt='heartBtn' />
            <LikeCount>589</LikeCount>
          </HeartBox>
        </SearchBox>
        <SearchBox>
          <QuestName>유산소 싫어님의 기초 체력 루틴</QuestName>
          <HeartBox>
            <img id='heart' src={offHeart} alt='heartBtn' />
            <LikeCount>700</LikeCount>
          </HeartBox>
        </SearchBox>
        <SearchBox>
          <QuestName>Faker의 하루 루틴</QuestName>
          <HeartBox>
            <img id='heart' src={offHeart} alt='heartBtn' />
            <LikeCount>877</LikeCount>
          </HeartBox>
        </SearchBox>
        <SearchBox>
          <QuestName>우린 공부 할 수 있어요!!!</QuestName>
          <HeartBox>
            <img id='heart' src={offHeart} alt='heartBtn' />
            <LikeCount>777</LikeCount>
          </HeartBox>
        </SearchBox>
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Body = styled.div`
  padding-bottom: 10px;
`;

const SearchBox = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const QuestName = styled.div`
  color: ${({ theme }) => theme.color.bg_color_off};
  font-size: ${({ theme }) => theme.font_size.SF_Pro16};
  font-weight: 590;
  padding-left: 30px;
`;

const HeartBox = styled.div`
  display: flex;
  justify-content: space-between;
  > img {
    width: 24px;
    height: 24px;
    padding-right: 18px;
  }
`;

const LikeCount = styled.div`
  color: ${({ theme }) => theme.color.bg_color_off};
  font-size: ${({ theme }) => theme.font_size.SF_Pro16};
  font-weight: 590;
  padding-right: 34px;
`;

export default RecommenList;
