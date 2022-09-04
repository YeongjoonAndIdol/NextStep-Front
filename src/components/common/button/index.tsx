import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  width: number;
  height: number;
}

const Button = ({ type = "button", ...props }: Props) => {
  return <DefaultBtn type={type} {...props} />;
};

const DefaultBtn = styled.input<{ width: number; height: number }>`
  cursor: pointer;
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  height: ${({ height }) => (height ? `${height}px` : `100%`)};
  padding: 0 16px;
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.surface_color};
  border-radius: 11px;
  border: none;
  font-size: ${({ theme }) => theme.font_size.SF_Pro18};
  font-weight: 590;
  text-align: center;
  :disabled {
    background-color: ${({ theme }) => theme.color.sub_color3};
  }
`;

export default Button;
