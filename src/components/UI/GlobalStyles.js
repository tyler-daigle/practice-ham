import { createGlobalStyle } from "styled-components";
import BubbleBackground from "../../images/double-bubble-outline.png";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Poppins", sans-serif;
    background-color: white; 
    background-image: url(${BubbleBackground});
    color: var(--primary-text-color);
    margin: 0;
  }

  p {
    margin-bottom: 1rem;
  }

  .blueText {
    color: var(--secondary-text-color);  
  }


`;

export default GlobalStyles;
