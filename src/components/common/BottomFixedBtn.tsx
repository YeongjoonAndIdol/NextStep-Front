import styled from "styled-components";
import DefaultBtn from "./DefaultBtn";

interface Props {
  height: number;
  value: string;
}

const BottomFixedBtn = ({ height, value }: Props) => {
  return (
    <>
      <FullSizeButtonWrapper>
        <DefaultBtn height={height} value={value} />
      </FullSizeButtonWrapper>
      <BackgroundBox />
    </>
  );
};

const FullSizeButtonWrapper = styled.section`
  position: fixed;
  bottom: 0;
  padding: 0 16px 20px;
  box-sizing: border-box;
  width: 100%;
`;

const BackgroundBox = styled.div`
  width: 100%;
  height: 48px;
`;

export default BottomFixedBtn;
