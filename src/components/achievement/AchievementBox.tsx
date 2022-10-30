import styled from "styled-components";
import { useState } from "react";
import { Category } from "../../interface/category";
import book from "../../assets/imgs/Achievement/book.svg";
import brain from "../../assets/imgs/Achievement/brain.svg";
import health from "../../assets/imgs/Achievement/health.svg";
import mountain from "../../assets/imgs/Achievement/mountain.svg";
import pencil from "../../assets/imgs/Achievement/pencil.svg";
import watch from "../../assets/imgs/Achievement/watch.svg";
import { MyAchievement } from "../../api/response";

const typeState = {
  SPORT: "운동",
  STUDY: "공부",
  LIFE: "생활패턴",
  HOBBY: "취미",
  BOOK: "독서",
  ENVIRONMENT: "환경",
};

const colorState = {
  SPORT: "#FFB55D",
  STUDY: "#E64DFF",
  LIFE: "#9AFF5D",
  HOBBY: "#5DE2FF",
  BOOK: "#FF8E8E",
  ENVIRONMENT: "#88FFDB",
} as const;

const imgState = {
  SPORT: `${health}`,
  STUDY: `${brain}`,
  LIFE: `${watch}`,
  HOBBY: `${pencil}`,
  BOOK: `${book}`,
  ENVIRONMENT: `${mountain}`,
} as const;

const AchievementBox = ({ content, exp, title, type }: MyAchievement) => {
  const boxType = typeState["STUDY"];
  const boxColor = colorState["STUDY"];
  const boxImg = imgState["STUDY"];

  return (
    <Wrapper>
      <LeftBar boxColor={boxColor} />
      <ContentDiv>
        <ContentHeader>
          <img src={boxImg} alt='icon' />
          <p>{boxType}</p>
        </ContentHeader>
        <TitleDiv>
          <p>{title}</p>
        </TitleDiv>
        <Content>
          <p>{content}</p>
        </Content>
        <ExpDiv>
          <p>+ {exp} EXP</p>
        </ExpDiv>
      </ContentDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const LeftBar = styled.div<{ boxColor: string }>`
  width: 4px;
  height: 120px;
  background-color: ${({ boxColor }) => boxColor};
`;

const ContentDiv = styled.div``;

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
  padding-top: 5px;
  padding-bottom: 12px;
  > p {
    margin: 0;
    font-weight: 590;
    font-size: ${({ theme }) => theme.font_size.SF_Pro12};
  }
`;

const TitleDiv = styled.div`
  padding-bottom: 4px;
  > p {
    margin: 0;
    font-weight: 590;
    font-size: ${({ theme }) => theme.font_size.SF_Pro14};
  }
`;

const Content = styled.div`
  padding-bottom: 4px;
  > p {
    margin: 0;
    width: 354px;
    height: 38px;
    font-weight: 400;
    font-size: ${({ theme }) => theme.font_size.SF_Pro12};
  }
`;

const ExpDiv = styled.div`
  > p {
    margin: 0;
    font-weight: 590;
    font-size: ${({ theme }) => theme.font_size.SF_Pro10};
  }
`;

export default AchievementBox;
