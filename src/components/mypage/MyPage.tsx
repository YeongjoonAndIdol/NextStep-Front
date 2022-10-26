import styled from "styled-components";
import setting from "../../assets/imgs/mypage/setting.svg";
import news from "../../assets/imgs/mypage/news.svg";
import baseball from "../../assets/imgs/mypage/baseball.svg";
import MyQuest from "./MyQuest";

const MyPage = () => {
  return (
    <Wrapper>
      <Header>
        <p>마이페이지</p>
        <img src={setting} alt='setting' />
      </Header>
      <MyInformation>
        <div className='UserName'>장석연님,</div>
        <div className='comment'>
          <CommentText>오늘</CommentText>
          <CommentYellow>성장</CommentYellow>
          <CommentText>많이 하셨나요?</CommentText>
        </div>
        <MyLevelDiv>
          <p id='level'>Lv.100</p>
          <LevelParting>|</LevelParting>
          <p id='exp'>123</p>
          <ExpParting>/</ExpParting>
          <p id='exp'>456</p>
        </MyLevelDiv>
      </MyInformation>
      <HR />
      <StateWrapper>
        <div className='Interval'>
          <StateBox>
            <p id='title'>걸음 수</p>
            <div className='state'>
              <p id='yellow'>15245</p>
              <p id='gray'>걸음</p>
            </div>
          </StateBox>
        </div>
        <div className='Ranking'>
          <StateBox>
            <p id='title'>내 순위</p>
            <div className='state'>
              <p id='yellow'>99</p>
              <p id='gray'>위</p>
            </div>
          </StateBox>
        </div>
        <MyQuestDiv>
          <p id='title'>나의 루틴</p>
          <MyQuest />
        </MyQuestDiv>
      </StateWrapper>
      <ImgWrapper>
        <img id='baseball' src={baseball} alt='img' />
        <img id='news' src={news} alt='img' />
      </ImgWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Header = styled.div`
  padding: 37px 46px 52px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p {
    font-size: ${({ theme }) => theme.font_size.SF_Pro18};
    font-weight: 590;
    color: ${({ theme }) => theme.color.bg_color_off};
  }
  > img {
    width: 18px;
    height: 18px;
  }
`;

const MyInformation = styled.div`
  padding: 0px 40px 20px;
  box-sizing: border-box;
  .UserName {
    padding-bottom: 5px;
  }
  .comment {
    display: flex;
    padding-bottom: 30px;
  }
`;

const CommentText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.font_size.SF_Pro16};
  font-weight: 590;
  color: ${({ theme }) => theme.color.bg_color_off};
`;

const CommentYellow = styled.p`
  margin: 0;
  padding: 0px 3px 0px 3px;
  font-size: ${({ theme }) => theme.font_size.SF_Pro16};
  font-weight: 590;
  color: ${({ theme }) => theme.color.main};
`;

const MyLevelDiv = styled.div`
  display: flex;
  align-items: center;
  #level {
    margin: 0;
    font-size: ${({ theme }) => theme.font_size.SF_Pro14};
    font-weight: 590;
    color: ${({ theme }) => theme.color.bg_color_off};
  }
  #exp {
    margin: 0;
    font-size: ${({ theme }) => theme.font_size.SF_Pro14};
    color: ${({ theme }) => theme.color.bg_color_off};
    font-weight: 400;
  }
`;

const LevelParting = styled.p`
  margin: 0;
  padding: 0 8px;
`;

const ExpParting = styled.p`
  margin: 0;
  padding: 0 3px;
`;

const HR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.gray_color4};
`;

const StateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 44px;
  .Interval {
    padding-bottom: 20px;
  }
  .Ranking {
    padding-bottom: 20px;
  }
`;

const StateBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  height: 38px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.gray_color5};
  #title {
    color: ${({ theme }) => theme.color.bg_color_off};
    font-weight: 400;
    font-size: ${({ theme }) => theme.font_size.SF_Pro16};
  }
  .state {
    display: flex;
    align-items: center;
    #yellow {
      padding-right: 5px;
      color: ${({ theme }) => theme.color.main};
      font-size: ${({ theme }) => theme.font_size.SF_Pro16};
      font-weight: 400;
    }
    #gray {
      color: ${({ theme }) => theme.color.gray_color1};
      font-size: ${({ theme }) => theme.font_size.SF_Pro14};
      font-weight: 400;
    }
  }
`;

const MyQuestDiv = styled.div`
  background-color: ${({ theme }) => theme.color.gray_color5};
  width: 360px;
  border-radius: 10px;
  padding: 14px;
  #title {
    margin: 0;
    font-size: ${({ theme }) => theme.font_size.SF_Pro16};
    font-weight: 400;
    color: black;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  #news {
    position: fixed;
    bottom: 56px;
    left: 0;
  }
  #baseball {
    position: fixed;
    bottom: 66px;
    right: 0;
  }
`;

export default MyPage;
