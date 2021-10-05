import styled from "styled-components";

export const Button = styled.button`
  border: none;
  height: 48px;
  width: 96px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  border-radius: 6px 6px 0 0;
  background: ${(props) => (props.theme === "light" ? "white" : "black")};
  color: ${(props) => (props.theme === "light" ? "black" : "white")};
`;
