import styled from "styled-components";
import { outLink } from "../../../../bridge";
import RecommenBox from "../box/RecommenBox";

const RecommenList = () => {
  /*
  useEffect(() => {
    GetRecommendList().then(res => setData(res));
  }, []);
*/

  const onClickList = () => {
    outLink("modal");
  };

  return (
    <Wrapper>
      <Body>
        <RecommenBox onClick={onClickList} />
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Body = styled.div`
  padding-bottom: 10px;
`;

export default RecommenList;
