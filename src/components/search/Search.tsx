import React, { useState } from "react";
import styled from "styled-components";
import { IGetSearch } from "../../api/response";
import magnifier from "../../assets/imgs/common/magnifier.svg";
import { GetSearch } from "../../api";
import onHeart from "../../assets/imgs/quest/onHeart.svg";
import offHeart from "../../assets/imgs/quest/offHeart.svg";

const Search = () => {
  const [onFocus, setOnFocus] = useState<boolean>(false);
  const [inputContent, setInputContent] = useState<string>("");
  const [data, setData] = useState<IGetSearch>({
    quests: [
      {
        id: "",
        quests_name: "",
        is_liked: false,
        like_count: 0,
      },
    ],
  });

  const HandleFocusInput = () => {
    setOnFocus(!onFocus);
  };

  const HandleBlurInput = () => {
    setOnFocus(!onFocus);
  };

  const fetch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputContent(value);
    GetSearch(value).then(res => setData(res));
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
          value={inputContent}
          onChange={fetch}
        />
        <img src={onFocus ? `${magnifier}` : ``} alt='' />
      </InputDiv>
      <Body>
        {data &&
          data.quests.map(quest => (
            <SearchBox>
              <QuestName>{quest.quests_name}</QuestName>
              <HeartBox>
                <img
                  id='heart'
                  src={quest.is_liked ? onHeart : offHeart}
                  alt='heartBtn'
                />
                <LikeCount>{quest.like_count}</LikeCount>
              </HeartBox>
            </SearchBox>
          ))}
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
  > img {
    position: fixed;
    top: 10px;
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
