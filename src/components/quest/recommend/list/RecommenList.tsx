import { useState } from "react";
import styled from "styled-components";
import RecommenBox from "../box/RecommenBox";
import arrow from "../../../../assets/imgs/common/leftArrow.svg";
import magnifier from "../../../../assets/imgs/common/magnifier.svg";
import RecommenModal from "../modal/RecommenModal";

const RecommenList = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  return (
    <Wrapper>
      <Header>
        <img id="arrow" src={arrow} alt="leftArrow" />
        <div className="headerName">추천 퀘스트</div>
        <img id="magnifier" src={magnifier} alt="magnifier" />
      </Header>
      <Body>
        {isModal ? (
          <RecommenModal />
        ) : (
          <>
            <RecommenBox />
            <RecommenBox />
            <RecommenBox />
            <RecommenBox />
          </>
        )}
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  > #arrow {
    padding-left: 31px;
  }
  > #magnifier {
    padding-right: 31px;
  }
  > div {
    color: ${({ theme }) => theme.color.bg_color_off};
    font-size: ${({ theme }) => theme.font_size.SF_Pro18};
    font-weight: 590;
  }
`;

const Body = styled.div`
  padding-top: 45px;
  padding-bottom: 10px;
`;

export default RecommenList;
