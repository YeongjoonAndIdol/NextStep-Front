import styled from "styled-components";
import BottomFixedBtn from "../../../common/BottomFixedBtn";
import ModalInItem from "./ModalInItem";
import YellowX from "../../../../assets/imgs/quest/yellowX.svg";

const RecommenModal = () => {
  return (
    <Wrapper>
      <ModalHeader>
        <div>서울대생 하루 루틴</div>
        <img src={YellowX} alt='x' />
      </ModalHeader>
      <ModalBody>
        <ModalInItem />
        <ModalInItem />
        <ModalInItem />
      </ModalBody>
      <BottomFixedBtn height={54} value='루틴 사용하기' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 30px 20px;
  > div {
    color: ${({ theme }) => theme.color.main};
    font-size: ${({ theme }) => theme.font_size.SF_Pro22};
    font-weight: 590;
  }
`;

const ModalBody = styled.div``;

export default RecommenModal;
