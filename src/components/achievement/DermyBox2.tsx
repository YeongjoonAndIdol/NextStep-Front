import styled from "styled-components";
import book from "../../assets/imgs/Achievement/book.svg";
import brain from "../../assets/imgs/Achievement/brain.svg";
import health from "../../assets/imgs/Achievement/health.svg";
import mountain from "../../assets/imgs/Achievement/mountain.svg";
import pencil from "../../assets/imgs/Achievement/pencil.svg";
import watch from "../../assets/imgs/Achievement/watch.svg";

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

const DermyBox2 = () => {
  const boxType = typeState["LIFE"];
  const boxColor = colorState["LIFE"];
  const boxImg = imgState["LIFE"];

  return (
    <Wrapper>
      <LeftBar boxColor={boxColor} />
      <ContentDiv>
        <ContentHeader>
          <img src={boxImg} alt='icon' />
          <p>{boxType}</p>
        </ContentHeader>
        <TitleDiv>
          <p>수학 문제 풀기</p>
        </TitleDiv>
        <Content>
          <p>
            기본적으로 수학에 대한 지식이 풍부해지고, 모자란 창의성과 유연한
            사고, 다양성과 순발력을 키워주는 효과가 강합니다.
          </p>
        </Content>
        <ExpDiv>
          <p>+ 100 EXP</p>
        </ExpDiv>
      </ContentDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding-bottom: 20px;
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

export default DermyBox2;
