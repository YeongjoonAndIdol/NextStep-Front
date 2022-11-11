import styled from "styled-components";
import { IGetReview } from "../../api/response";
import menu from "../../assets/imgs/common/menu.svg";

const ReviewBox = ({ content, is_success }: IGetReview) => {
  return (
    <Wrapper>
      <HeaderWrapper isSuccess={is_success}>
        <div>
          <p id='date'>2022.11.05 (토)</p>
          <p id='clear'>{is_success ? "성공" : "실패"}</p>
        </div>
        <img src={menu} alt='menu' />
      </HeaderWrapper>
      <ContentWrapper>
        <Content>{content}</Content>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderWrapper = styled.div<{ isSuccess: boolean }>`
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
    color: ${({ theme, isSuccess }) =>
      isSuccess ? theme.color.main : theme.color.error_color};
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
