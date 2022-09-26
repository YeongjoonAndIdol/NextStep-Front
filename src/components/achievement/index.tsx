import styled from "styled-components";
import leftArrow from "../../assets/imgs/common/leftArrow.svg";
import recall from "../../assets/imgs/Achievement/recall.svg";
import plus from "../../assets/imgs/Achievement/yellowPlus.svg";

const Week = [{}, {}, {}, {}, {}, {}, {}];

const Achievement = () => {
  return (
    <Wrapper>
      <Hedaer>
        <img id='exit' src={leftArrow} alt='exit' />
        <p id='title'>성취도</p>
        <img id='recall' src={recall} alt='recall' />
      </Hedaer>
      <WriteDiv>
        <img src={plus} alt='+' />
        <p id='writePlus'>회고 작성하기</p>
      </WriteDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Hedaer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 31px 22px;
  #title {
    font-size: ${({ theme }) => theme.font_size.SF_Pro20};
    font-weight: 590;
    color: ${({ theme }) => theme.color.bg_color_off};
  }
`;

const WriteDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 30px 36px 0;
  #writePlus {
    margin: 0 0 0 6px;
    font-size: ${({ theme }) => theme.font_size.SF_Pro12};
    font-weight: 590;
    color: ${({ theme }) => theme.color.main};
  }
`;

export default Achievement;
