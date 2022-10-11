import styled from "styled-components";
import { useState } from "react";
import { Category } from "../../interface/category";

const colorState = {
  SPORT: "#FFB55D",
  STUDY: "#E64DFF",
  LIFE: "#9AFF5D",
  HOBBY: "#5DE2FF",
  BOOK: "#FF8E8E",
  ENVIRONMENT: "#88FFDB",
} as const;

const boxColor = colorState["STUDY"];

const AchievementBox = () => {
  return <></>;
};

const Wrapper = styled.div``;

export default AchievementBox;
