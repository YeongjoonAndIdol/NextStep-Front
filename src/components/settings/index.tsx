import { useEffect, useState } from "react";
import styled from "styled-components";
import QuestMold from "./QuestMold";
import { IGetMySetting } from "../../api/response/index";
import { GetMySetting } from "../../api";

const Settings = () => {
  const [data, setData] = useState<IGetMySetting>({
    name: "",
    liked_quest: [{ id: "", liked_name: "" }],
  });

  useEffect(() => {
    GetMySetting().then(res => setData(res));
  }, []);

  return (
    <Wrapper>
      <MenuWrapper>
        <NameDiv>
          <p id='name'>이름</p>
          <p id='userName'>{data.name}</p>
        </NameDiv>
        <QuestDiv>
          <QuestHeader>
            <p id='title'>내가 좋아요한 퀘스트</p>
            <p id='number'>{data.liked_quest.length}개</p>
          </QuestHeader>
          {data.liked_quest.map(data => (
            <QuestMold id={data.id} liked_name={data.liked_name} />
          ))}
        </QuestDiv>
        <TutorialDiv>
          <p id='restart'>튜토리얼 재진행</p>
          <p id='start'>시작</p>
        </TutorialDiv>
        <LogOutDiv>
          <p>로그아웃</p>
        </LogOutDiv>
      </MenuWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const NameDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  height: 30px;
  border-radius: 10px;
  padding: 12px 14px 12px;
  background-color: ${({ theme }) => theme.color.gray_color5};
  #name {
    font-size: ${({ theme }) => theme.font_size.SF_Pro16};
    font-weight: 400;
    color: black;
  }
  #userName {
    font-size: ${({ theme }) => theme.font_size.SF_Pro14};
    font-weight: 400;
    color: ${({ theme }) => theme.color.bg_color_off};
  }
`;

const QuestDiv = styled.div`
  background-color: ${({ theme }) => theme.color.gray_color5};
  width: 340px;
  border-radius: 10px;
  padding: 14px 12px 14px 14px;
`;

const QuestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  #title {
    margin: 0;
    font-size: ${({ theme }) => theme.font_size.SF_Pro16};
    font-weight: 400;
    color: black;
  }
  #number {
    margin: 0;
    font-size: ${({ theme }) => theme.font_size.SF_Pro14};
    font-weight: 400;
    color: ${({ theme }) => theme.color.bg_color_off};
  }
`;

const TutorialDiv = styled.div`
  width: 340px;
  height: 30px;
  border-radius: 10px;
  padding: 12px 14px 12px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.gray_color5};
  #restart {
    margin: 0;
    font-size: ${({ theme }) => theme.font_size.SF_Pro16};
    font-weight: 400;
    color: black;
  }
  #start {
    margin: 0;
    font-size: ${({ theme }) => theme.font_size.SF_Pro14};
    font-weight: 400;
    color: ${({ theme }) => theme.color.bg_color_off};
  }
`;

const LogOutDiv = styled.div`
  width: 340px;
  height: 30px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.error_color};
  display: flex;
  align-items: center;
  > p {
    font-size: ${({ theme }) => theme.font_size.SF_Pro16};
    font-weight: 400;
    color: ${({ theme }) => theme.color.surface_color};
  }
`;

export default Settings;
