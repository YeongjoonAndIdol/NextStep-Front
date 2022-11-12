import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { GetReview } from "../../api";
import { IGetReview } from "../../api/response";
import { makeOutLink } from "../../bridge";
import { WeekState } from "../../store/atom";
import Week from "../common/Week";
import ReviewBox from "./ReviewBox";

const Review = () => {
  const [state, setState] = useRecoilState(WeekState);
  const [data, setData] = useState<IGetReview>({
    is_success: true,
    content:
      "안녕하십니까 심사위원님 저희는 비록 조금 아쉬운 모습을 보여드리고 있습니다 열심히 개발을 하였고 후회하는 마음 없이 최선을 각 분야 친구들 모두 다 하였고 개별적으로는 다 완성하였지만 합치질 못하였습니다. 많이 아쉽지만 저희 모두 노력하였습니다 좋게 봐주시면 감사합니다",
    week: state.weekValue,
  });

  /*
  useEffect(() => {
    GetReview().then(res => setData(res));
  }, []);
*/

  const onClickMake = () => {
    makeOutLink("make");
  };

  return (
    <Wrapper>
      <CreateWrapper onClick={onClickMake}>
        <p>+ 회고 작성하기</p>
      </CreateWrapper>
      <WeekWrapper>
        <Week />
      </WeekWrapper>
      <ReviewWrapper>
        {state.weekValue && (
          <ReviewBox
            content={data.content}
            is_success={state.checkValue}
            week={state.weekValue}
          />
        )}
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
