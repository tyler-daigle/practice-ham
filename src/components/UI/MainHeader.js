import styled from "styled-components";
import PageTitle from "./PageTitle";

import computerImage from "../../images/computer_illustration_1.png";

const MainHeaderContainer = styled.div`
  background-color: var(--header-bg-color);
  color: var(--header-text-color);
  box-shadow: 4px 0 6px black;
  margin-bottom: 1rem;
`;

const HeaderImage = styled.img`
  display: block;
`;

const FlexContainer = styled.div`
  width: ${(props) => props.containerWidth || "100%"};
  padding: ${(props) => props.padding || 0};
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: center;
  gap: 1rem;
`;

const HeaderSubText = styled.p`
  font-size: 0.85rem;
  font-weight: 300;
`;

export default function MainHeader() {
  return (
    <header>
      <MainHeaderContainer>
        <FlexContainer direction="column" containerWidth="80%" padding="1rem">
          <div>
            <PageTitle>Practice Amateur Radio Exams</PageTitle>
            <HeaderSubText>
              Free practice exams for Technician, General, and Extra Classes.
            </HeaderSubText>
          </div>
          <HeaderImage
            src={computerImage}
            width={300}
            height={150}
            alt="Compter on a desk"
          />
        </FlexContainer>
      </MainHeaderContainer>
    </header>
  );
}
