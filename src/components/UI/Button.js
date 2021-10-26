import styled from "styled-components";

const Button = styled.button`
  font-family: inherit;
  background-color: var(--button-bg-color);
  color: var(--button-fg-color);
  border-radius: 12px;
  border: none;
  padding: 0.5rem 1.75rem;
  font-weight: bold;
  font-size: ${(props) => {
    switch (props.size) {
      case "md":
        return "1rem";
      case "lg":
        return "1.5rem";
      case "xl":
        return "2rem";
      default:
        return "1rem";
    }
  }};
  &:active {
    background-color: #84b6b9;
  }
`;

export default Button;
