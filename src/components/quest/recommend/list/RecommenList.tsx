import { useState } from "react";
import styled from "styled-components";
import RecommenBox from "../box/RecommenBox";
import RecommenModal from "../modal/RecommenModal";

const RecommenList = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  return (
    <Wrapper>
      <Body>
        {isModal ? (
          <RecommenModal setIsModal={setIsModal} />
        ) : (
          <>
            <RecommenBox setIsModal={setIsModal} />
          </>
        )}
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Body = styled.div`
  padding-top: 45px;
  padding-bottom: 10px;
`;

export default RecommenList;
