import React from "react";
import styled from "styled-components";
import onHeart from "../../../../assets/imgs/quest/onHeart.svg";
import offHeart from "../../../../assets/imgs/quest/offHeart.svg";

const RecommenBox = () => {
  return (
    <Wrapper>
      <QuestName>서울대생 하루 루틴</QuestName>
      <HeartBox>
        <img id="heart" src={onHeart} alt="heartBtn" />
        <LikeCount>512</LikeCount>
      </HeartBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 66px;
  padding-left: 30px;
  padding-right: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuestName = styled.div`
  color: ${({ theme }) => theme.color.bg_color_off};
  font-size: ${({ theme }) => theme.font_size.SF_Pro16};
  font-weight: 590;
`;

const HeartBox = styled.div`
  display: flex;
  > img {
    width: 26px;
    height: 26px;
  }
`;

const LikeCount = styled.div`
  color: ${({ theme }) => theme.color.bg_color_off};
  font-size: ${({ theme }) => theme.font_size.SF_Pro16};
  padding-left: 18px;
`;

export default RecommenBox;
