import styled from "styled-components";
import Week from "../common/Week";
import ReviewBox from "./ReviewBox";

const Review = () => {
  return (
    <Wrapper>
      <CreateWrapper>
        <p>+ 회고 작성하기</p>
      </CreateWrapper>
      <WeekWrapper>
        <Week />
      </WeekWrapper>
      <ReviewWrapper>
        <ReviewBox />
      </ReviewWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 30px;
`;

const CreateWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 36px;
  > p {
    color: ${({ theme }) => theme.color.main};
    font-weight: 590;
    font-size: ${({ theme }) => theme.font_size.SF_Pro12};
  }
`;

const WeekWrapper = styled.div`
  width: 342px;
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

const ReviewWrapper = styled.div``;

export default Review;
