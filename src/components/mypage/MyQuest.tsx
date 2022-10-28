import styled from "styled-components";
import menu from "../../assets/imgs/common/menu.svg";
import { MyRoutin } from "../../api/response/index";

const MyQuest = ({ id, routin_name }: MyRoutin) => {
  return (
    <Wrapper>
      <p>{routin_name}</p>
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
