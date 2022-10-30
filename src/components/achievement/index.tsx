import styled from "styled-components";
import { useState, useEffect } from "react";
import Week from "../common/Week";
import AchievementBox from "./AchievementBox";
import { Category } from "../../interface/category";
import { IGetAchievement } from "../../api/response";
import { GetAchievement } from "../../api";

const Achievement = () => {
  const [data, setData] = useState<IGetAchievement>({
    week_achievement: [true],
    completed_quests: [
      {
        type: "",
        title: "",
        content: "",
        exp: 0,
      },
    ],
  });

  useEffect(() => {
    GetAchievement().then(res => setData(res));
  }, []);

  return (
    <Wrapper>
      <WeekDiv>
        <Week />
      </WeekDiv>
      <LogDiv>
        {data.completed_quests.map(data => (
          <AchievementBox
            content={data.content}
            exp={data.exp}
            title={data.title}
            type={data.type}
          />
        ))}
      </LogDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 31px;
`;

const WeekDiv = styled.div`
  width: 342px;
  padding-bottom: 38px;
  display: flex;
  justify-content: space-between;
`;

const LogDiv = styled.div``;

export default Achievement;
