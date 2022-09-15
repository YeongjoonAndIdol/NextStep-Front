import styled from "styled-components";
import background from "../../assets/imgs/mypage/background.svg";
import sampleImg from "../../assets/imgs/mypage/sampleimg.svg";

const MyPage = () => {
  return (
    <Wrapper>
      <img src={background} alt="" />
      <UserProfileDiv>
        <UserName>안녕하세요, 전영준님.</UserName>
        <UserLevel>Level 56 | 156/560 EXP</UserLevel>
        <img src={sampleImg} alt="" />
      </UserProfileDiv>
      <MyPageMenuDiv>
        <MyPageMenu>
          <MyPageBlackFont>걸음 수</MyPageBlackFont>
          <MyPagePurpleFont>6722</MyPagePurpleFont>
        </MyPageMenu>
      </MyPageMenuDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const UserProfileDiv = styled.div`
  position: fixed;
  top: 108px;
  right: 105px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserName = styled.p`
  margin: 0;
  padding-bottom: 10px;
  color: white;
  font-size: ${({ theme }) => theme.font_size.SF_Pro22};
`;

const UserLevel = styled.p`
  margin: 0;
  padding-bottom: 35px;
  color: white;
  font-size: ${({ theme }) => theme.font_size.SF_Pro12};
`;

const MyPageMenuDiv = styled.div``;

const MyPageMenu = styled.div``;

const MyPageBlackFont = styled.p``;

const MyPagePurpleFont = styled.p``;

export default MyPage;
