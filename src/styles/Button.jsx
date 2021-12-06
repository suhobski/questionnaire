import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  outline: none;
  background: coral;
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      background: lightgrey;
    `}
`;

export default Button;
