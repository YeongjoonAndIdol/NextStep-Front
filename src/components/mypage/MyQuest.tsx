import styled from "styled-components";
import menu from "../../assets/imgs/common/menu.svg";

const MyQuest = () => {
  return (
    <Wrapper>
      <p>광주 디자이너 하루 루틴</p>
      <img src={menu} alt='*' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 338px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.gray_color5};
  > p {
    font-size: ${({ theme }) => theme.font_size.SF_Pro14};
    font-weight: 400;
    color: ${({ theme }) => theme.color.bg_color_off};
  }
  > img {
  }
`;

export default MyQuest;
