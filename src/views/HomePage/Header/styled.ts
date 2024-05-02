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

export const HeaderGreeter = styled.h2`
  font-weight: 400;
  font-size: 2.4vw;
  margin: 0 0 1rem 0;
  padding: 0;
  letter-spacing: 0.03rem;
  text-align: center;
`;

export const SpecialTextGreeter = styled.span`
  font-weight: 700;
`;

export const HeaderContent = styled.h3`
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

export const SubHeaderContent = styled.h4`
  margin: 1rem 0 1rem 0;
  font-size: 1.2vw;
  font-weight: 400;
  letter-spacing: 0.03rem;
`;

export const CurlyBraces = styled.span`
  font-weight: 500;
  color: #777777;
  font-size: 2.7vw;
`;

export const Paragraph = styled.p`
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 0.03rem;
  line-height: 1.8;
`;
