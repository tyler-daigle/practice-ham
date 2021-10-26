import styled, { createGlobalStyle } from "styled-components";

import AppContainer from "./components/UI/AppContainer";
import MainHeader from "./components/UI/MainHeader";
import CSSVariables from "./components/UI/CSSVariables";
import GlobalStyles from "./components/UI/GlobalStyles";

const Button = styled.button`
  padding: 1rem;
  background-color: blue;
  color: white;
  font-family: inherit;
  border: none;

  &:active {
    background-color: lightblue;
  }
`;

const HeaderImage = styled.img``;
function clickHandler() {
  console.log("click");
}

export default function App() {
  return (
    <>
      <GlobalStyles dark />
      <CSSVariables>
        <MainHeader />
        <AppContainer>
          <h1>Hello, World!</h1>
          <Button onClick={clickHandler}>Click Me!</Button>
        </AppContainer>
      </CSSVariables>
    </>
  );
}
