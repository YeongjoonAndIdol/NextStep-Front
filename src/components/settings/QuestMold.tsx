import styled from "styled-components";
import onHeart from "../../assets/imgs/quest/onHeart.svg";
import point from "../../assets/imgs/common/point.svg";
import { LikedQuest } from "../../api/response";

const QuestMold = ({ liked_name, id }: LikedQuest) => {
  return (
    <Wrapper>
      <div className='textDiv'>
        <img id='point' src={point} alt='*' />
        <p id='text'>{liked_name}</p>
      </div>
      <img id='heart' src={onHeart} alt='Heart' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 338px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.gray_color5};
  .textDiv {
    display: flex;
    align-items: center;
    #point {
      padding: 0 8px 0 8px;
    }
    #text {
      padding-right: 160px;
      margin: 0;
      font-size: ${({ theme }) => theme.font_size.SF_Pro14};
      font-weight: 400;
      color: black;
    }
  }
  #heart {
    width: 14px;
    height: 14px;
  }
`;

export default QuestMold;
