import styled from "styled-components";
import leftArrow from "../../assets/imgs/common/leftArrow.svg";

const Achievement = () => {
  return (
    <Wrapper>
      <Hedaer>
        <img id='exit' src={leftArrow} alt='exit' />
        <p></p>
      </Hedaer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Hedaer = styled.div``;

export default Achievement;
