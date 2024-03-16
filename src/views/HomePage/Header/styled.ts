import styled from "styled-components";

export const SectionDividerPurposeOnly = styled.div`
  position: relative;
`;

export const Section = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

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
  margin: 8vw 0;
`;

export const HeaderContent = styled.h2`
  font-weight: 700;
  margin: 0;
  padding: 0;
  font-size: 2.7vw;
`;

export const SpecialText = styled.span`
  background-image: ${({ theme }) => theme.colors.header.text};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  transition: color ease 0.5s;
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
