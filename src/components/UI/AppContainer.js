import styled from "styled-components";

const AppContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 90vh;
  padding-bottom: 2rem;
  justify-content: space-between;

  @media (min-width: 1080px) {
    max-width: 800px;
  }
`;

export default AppContainer;
