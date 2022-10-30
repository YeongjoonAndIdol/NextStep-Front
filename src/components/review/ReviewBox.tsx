import styled from "styled-components";
import menu from "../../assets/imgs/common/menu.svg";

const ReviewBox = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <div>
          <p id='date'>2022.9.15 (목)</p>
          <p id='clear'>실패</p>
        </div>
        <img src={menu} alt='menu' />
      </HeaderWrapper>
      <ContentWrapper>
        <Content>
          비록 실패했지만 이 앱과 함께 저의 삶의 질을 높일 수 있어 뜻 깊은
          경험이었습니다.
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
  }
  #date {
    margin: 0;
    font-weight: 600;
    font-size: ${({ theme }) => theme.font_size.SF_Pro20};
    color: ${({ theme }) => theme.color.main};
  }
  #clear {
    margin: 0;
    padding-left: 20px;
    font-weight: 590;
    font-size: ${({ theme }) => theme.font_size.SF_Pro14};
    color: ${({ theme }) => theme.color.error_color};
  }
`;

const ContentWrapper = styled.div``;

const Content = styled.p`
  margin: 0;
  padding-top: 30px;
  font-weight: 400;
  font-size: ${({ theme }) => theme.font_size.SF_Pro18};
`;

export default ReviewBox;
