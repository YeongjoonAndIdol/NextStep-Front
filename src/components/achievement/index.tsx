import styled from "styled-components";
import Week from "../common/Week";
import AchievementBox from "./AchievementBox";

const Achievement = () => {
  return (
    <Wrapper>
      <WeekDiv>
        <Week />
      </WeekDiv>
      <QuestName>서울대생의 하루 루틴</QuestName>
      <LogDiv>
        <AchievementBox />
        <AchievementBox />
        <AchievementBox />
      </LogDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 31px;
`;

const QuestName = styled.p`
  font-size: ${({ theme }) => theme.font_size.SF_Pro16};
  color: ${({ theme }) => theme.color.main};
`;

const WeekDiv = styled.div`
  width: 342px;
  padding-top: 60px;
  padding-bottom: 38px;
  display: flex;
  justify-content: space-between;
`;

const LogDiv = styled.div``;

export default Achievement;
