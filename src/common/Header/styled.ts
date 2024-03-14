import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30vh;
`;

export const HeaderContent = styled.h2`
  font-weight: 700;
  margin: 0;
  padding: 0;
  font-size: 3.5vw;
`;

export const SpecialText = styled.span`
  color: ${({ theme }) => theme.colors.basic};
`;

export const SubHeaderContent = styled.h3`
  margin-top: 1rem;
  font-size: 2vw;
  font-weight: 300;
  letter-spacing: 0.03rem;
`;
