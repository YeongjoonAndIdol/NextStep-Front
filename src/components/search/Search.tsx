import { useState } from "react";
import styled from "styled-components";
import arrow from "../../assets/imgs/common/leftArrow.svg";
import magnifier from "../../assets/imgs/common/magnifier.svg";

const Search = () => {
  const [onFocus, setOnFocus] = useState<boolean>(false);

  const HandleFocusInput = () => {
    setOnFocus(!onFocus);
  };

  const HandleBlurInput = () => {
    setOnFocus(!onFocus);
  };

  return (
    <Wrapper>
      <Header>
        <img id="arrow" src={arrow} alt="leftArrow" />
        <div className="headerName">검색</div>
      </Header>
      <InputDiv>
        <input
          name="search"
          className={onFocus ? "FocusInput" : "BlurInput"}
          placeholder={onFocus ? "" : "검색하실 언어를 입력해주세요."}
          onFocus={HandleFocusInput}
          onBlur={HandleBlurInput}
        />
        <img src={onFocus ? `${magnifier}` : ``} alt="" />
      </InputDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
`;

const Header = styled.div`
  display: flex;
  #arrow {
    padding-left: 15px;
  }
  > div {
    color: ${({ theme }) => theme.color.bg_color_off};
    font-size: ${({ theme }) => theme.font_size.SF_Pro18};
    font-weight: 590;
    padding-left: 166px;
  }
`;

const InputDiv = styled.div`
  padding-top: 23px;
  display: flex;
  justify-content: center;
  > img {
    position: fixed;
    top: 79px;
    right: 25px;
    z-index: 99;
  }
  .FocusInput {
    width: 350px;
    height: 22px;
    padding: 9px 35px 9px 12px;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.color.empty_place_color};
  }
  .BlurInput {
    width: 368px;
    height: 22px;
    padding: 9px 12px;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.color.gray_color2};
  }
`;

export default Search;
