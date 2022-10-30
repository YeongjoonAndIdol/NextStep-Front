import styled from "styled-components";
import onHeart from "../../../../assets/imgs/quest/onHeart.svg";
import offHeart from "../../../../assets/imgs/quest/offHeart.svg";
import { QuestList } from "../../../../api/response";

const RecommenBox = ({ id, is_liked, like_count, quest_name }: QuestList) => {
  return (
    <SearchBox>
      <QuestName>{quest_name}</QuestName>
      <HeartBox>
        <img id='heart' src={is_liked ? onHeart : offHeart} alt='heartBtn' />
        <LikeCount>{like_count}</LikeCount>
      </HeartBox>
    </SearchBox>
  );
};

const SearchBox = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const QuestName = styled.div`
  color: ${({ theme }) => theme.color.bg_color_off};
  font-size: ${({ theme }) => theme.font_size.SF_Pro16};
  font-weight: 590;
  padding-left: 30px;
`;

const HeartBox = styled.div`
  display: flex;
  justify-content: space-between;
  > img {
    width: 24px;
    height: 24px;
    padding-right: 18px;
  }
`;

const LikeCount = styled.div`
  color: ${({ theme }) => theme.color.bg_color_off};
  font-size: ${({ theme }) => theme.font_size.SF_Pro16};
  font-weight: 590;
  padding-right: 34px;
`;

export default RecommenBox;
