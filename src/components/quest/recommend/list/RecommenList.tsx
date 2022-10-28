import { useEffect, useState } from "react";
import styled from "styled-components";
import { GetRecommendList } from "../../../../api";
import { IGetRecommendList } from "../../../../api/response";
import RecommenBox from "../box/RecommenBox";

const RecommenList = () => {
  const [data, setData] = useState<IGetRecommendList>({
    recomend_quest: [
      { id: "", quest_name: "", is_liked: false, like_count: 0 },
    ],
  });

  useEffect(() => {
    GetRecommendList().then(res => setData(res));
  }, []);

  return (
    <Wrapper>
      <Body>
        {data.recomend_quest.map(data => (
          <RecommenBox
            id={data.id}
            is_liked={data.is_liked}
            quest_name={data.quest_name}
            like_count={data.like_count}
          />
        ))}
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Body = styled.div`
  padding-bottom: 10px;
`;

export default RecommenList;
