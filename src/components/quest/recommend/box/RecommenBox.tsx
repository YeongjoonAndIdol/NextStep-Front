import styled from "styled-components";
import onHeart from "../../../../assets/imgs/quest/onHeart.svg";
import offHeart from "../../../../assets/imgs/quest/offHeart.svg";
import { QuestList } from "../../../../api/response";

interface Props {
  onClick: () => void;
}

const RecommenBox = ({ onClick }: Props) => {
  return (
    <SearchBox onClick={onClick}>
      <QuestName>서울대생의 하루 루틴</QuestName>
      <HeartBox>
        <img id='heart' src={onHeart} alt='heartBtn' />
        <LikeCount>200</LikeCount>
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
