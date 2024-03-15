import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeaderSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5vw 0;
`;

export const HeaderContent = styled.h2`
  font-weight: 700;
  margin: 0;
  padding: 0;
  font-size: 3vw;
`;

export const SpecialText = styled.span`
  color: ${({ theme }) => theme.colors.basic};
`;

export const SubHeaderContent = styled.h3`
  margin-top: 0.5rem;
  font-size: 1.2vw;
  font-weight: 400;
  letter-spacing: 0.03rem;
`;

export const Paragraph = styled.p`
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 0.03rem;
  line-height: 1.8;
`;
