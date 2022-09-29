import styled from "styled-components";
import { useState } from "react";
import leftArrow from "../../assets/imgs/common/leftArrow.svg";
import recall from "../../assets/imgs/Achievement/recall.svg";
import plus from "../../assets/imgs/Achievement/yellowPlus.svg";
import grayCheck from "../../assets/imgs/Achievement/grayCheck.svg";
import yelloCheck from "../../assets/imgs/Achievement/yellowCheck.svg";
import redCheck from "../../assets/imgs/Achievement/redCheck.svg";
import { weekOptions } from "./option";
import { TSort } from "../../interface/week";

const Achievement = () => {
  const [sort, setSort] = useState(weekOptions[0].value);
  const [choice, setChoice] = useState<boolean>(false);

  const onChoice = () => {
    setChoice(!choice);
  };

  const onChangeWeek = (sort: string) => {
    const sortValue = sort as TSort;
    setSort(sortValue);
  };

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
      <WeekDiv>
        {weekOptions.map(item => (
          <ItemDiv>
            <DayDiv onClick={onChoice} choiceColor={choice}>
              <p>{item.option}</p>
            </DayDiv>
            <img src={grayCheck} alt='check' />
          </ItemDiv>
        ))}
      </WeekDiv>
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

const WeekDiv = styled.div`
  width: 342px;
  padding-left: 43px;
  padding-right: 43px;
  display: flex;
  justify-content: space-between;
`;

const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const DayDiv = styled.div<{ choiceColor: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, choiceColor }) =>
    choiceColor ? theme.color.main : theme.color.surface_color};
  width: 30px;
  height: 30px;
  border-radius: 50%;

  > p {
    margin: 0;
    font-size: ${({ theme }) => theme.font_size.SF_Pro14};
    font-weight: 590;
    color: ${({ choiceColor, theme }) =>
      choiceColor ? theme.color.surface_color : theme.color.bg_color_off};
  }
`;

export default Achievement;
