import styled from "styled-components";
import grayCheck from "../../assets/imgs/Achievement/grayCheck.svg";
import redCheck from "../../assets/imgs/Achievement/redCheck.svg";
import yelloCheck from "../../assets/imgs/Achievement/yellowCheck.svg";
import { useRecoilState } from "recoil";
import { WeekState } from "../../store/atom";
import { useState } from "react";

const weekData = {
  weekList: [
    {
      week: "월",
      value: "MON",
      check: false,
    },
    {
      week: "화",
      value: "TUE",
      check: false,
    },
    {
      week: "수",
      value: "WED",
      check: false,
    },
    {
      week: "목",
      value: "THU",
      check: false,
    },
    {
      week: "금",
      value: "FRI",
      check: false,
    },
    {
      week: "토",
      value: "SAT",
      check: true,
    },
  ],
};

const Week = () => {
  const [state, setState] = useRecoilState(WeekState);
  const [cur, setCur] = useState<number>();

  const onClickWeek = (num: number, week: string, check: boolean) => {
    setCur(num);
    setState({ weekValue: week, checkValue: check });
    console.log(state);
  };

  return (
    <Wrapper>
      {weekData.weekList.map((data, idx) => (
        <WeekBox>
          <WeekName
            key={data.value}
            state={!((idx + 1) * 10 === cur)}
            onClick={() => onClickWeek((idx + 1) * 10, data.week, data.check)}
          >
            {data.week}
          </WeekName>
          <img
            src={data.check ? `${yelloCheck}` : `${grayCheck}`}
            alt='checkbox'
          />
        </WeekBox>
      ))}
      <WeekBox>
        <WeekName state={true}>일</WeekName>
        <img src={redCheck} alt='checkbox' />
      </WeekBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeekBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 27px;
  > img {
    padding-top: 10px;
  }
`;

const WeekName = styled.div<{ state: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  color: ${({ theme, state }) =>
    state ? theme.color.bg_color_off : theme.color.bg_color_on};
  background-color: ${({ theme, state }) =>
    state ? theme.color.surface_color : theme.color.main};
`;

export default Week;
