import React, { useState } from "react";
import styled from "styled-components";
import magnifier from "../../assets/imgs/common/magnifier.svg";
import { GetSearch } from "../../api";

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
      <InputDiv>
        <input
          name='search'
          className={onFocus ? "FocusInput" : "BlurInput"}
          placeholder={onFocus ? "" : "검색하실 언어를 입력해주세요."}
          onFocus={HandleFocusInput}
          onBlur={HandleBlurInput}
        />
        <img src={onFocus ? `${magnifier}` : ``} alt='' />
      </InputDiv>
      <Body>
        {onFocus ? (
          <div className='OnHistory'></div>
        ) : (
          <div className='OffHistory'>
            <p>검색하신 기록이 없습니다.</p>
          </div>
        )}
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 25px;
  > img {
    position: fixed;
    top: 35px;
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

const Body = styled.div`
  .OnHistory {
    padding-top: 17px;
  }
  .OffHistory {
    height: 66px;
    padding-top: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    > p {
      color: ${({ theme }) => theme.color.main};
      font-size: ${({ theme }) => theme.font_size.SF_Pro14};
      font-weight: 590;
    }
  }
`;

const SearchBox = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const QuestName = styled.div`
  color: ${({ theme }) => theme.color.bg_color_off};
  font-size: ${({ theme }) => theme.font_size.SF_Pro16};
  font-weight: 590;
  padding-left: 30px;
`;

const HeartBox = styled.div`
  display: flex;
  justify-content: space-between;
  > img {
    width: 24px;
    height: 24px;
    padding-right: 18px;
  }
`;

const LikeCount = styled.div`
  color: ${({ theme }) => theme.color.bg_color_off};
  font-size: ${({ theme }) => theme.font_size.SF_Pro16};
  font-weight: 590;
  padding-right: 34px;
`;

export default Search;
