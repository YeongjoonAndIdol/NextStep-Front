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
          <QuestName>충북대생의 운동 루틴</QuestName>
          <HeartBox>
            <img id='heart' src={offHeart} alt='heartBtn' />
            <LikeCount>259</LikeCount>
          </HeartBox>
        </SearchBox>
        <SearchBox>
          <QuestName>충남대생의 공부 루틴</QuestName>
          <HeartBox>
            <img id='heart' src={offHeart} alt='heartBtn' />
            <LikeCount>332</LikeCount>
          </HeartBox>
        </SearchBox>
        <SearchBox>
          <QuestName>호서대생의 공부 루틴</QuestName>
          <HeartBox>
            <img id='heart' src={offHeart} alt='heartBtn' />
            <LikeCount>323</LikeCount>
          </HeartBox>
        </SearchBox>
        <SearchBox>
          <QuestName>인하대생의 하루 루틴</QuestName>
          <HeartBox>
            <img id='heart' src={offHeart} alt='heartBtn' />
            <LikeCount>459</LikeCount>
          </HeartBox>
        </SearchBox>
        <SearchBox>
          <QuestName>kbs기자의 성공 하루 루틴</QuestName>
          <HeartBox>
            <img id='heart' src={offHeart} alt='heartBtn' />
            <LikeCount>589</LikeCount>
          </HeartBox>
        </SearchBox>
        <SearchBox>
          <QuestName>경찰관의 기초 체력 루틴</QuestName>
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
