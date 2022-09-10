import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  height: number;
}

const DefaultBtn = ({ type = "button", ...props }: Props) => {
  return <Button type={type} {...props} />;
};

const Button = styled.input<{ height: number }>`
  cursor: pointer;
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : `100%`)};
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.surface_color};
  border-radius: 11px;
  border: none;
  font-size: ${({ theme }) => theme.font_size.SF_Pro18};
  font-weight: 590;
  text-align: center;
  box-shadow: 0px 4px 8px 0px #00000026;
  :disabled {
    background-color: ${({ theme }) => theme.color.sub_color3};
  }
`;

export default DefaultBtn;
