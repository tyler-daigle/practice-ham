import styled from "styled-components";

const PageHeaderContainer = styled.div`
  margin-bottom: 1rem;
  background-color: var(--header-bg-color);
  color: var(--header-text-color);
  padding: 0.5rem;
  box-shadow: 4px 0 8px var(--primary-text-color);
`;

export default function PageHeader({ children }) {
  return <PageHeaderContainer>{children}</PageHeaderContainer>;
}
