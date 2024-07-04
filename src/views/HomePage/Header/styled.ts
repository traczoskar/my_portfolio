import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionDividerPurposeOnly = styled.div`
  position: relative;
`;

export const Section = styled(motion.div)`
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    padding: 0 3rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 0 1rem;
  }
`;

export const HeaderSectionWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8rem 0 15rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    margin: 4rem 0 9rem 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 3rem 0 8rem 0;
  }
`;

export const HeaderWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    gap: 0.75rem;
  }
`;

interface HeaderGreeterProps {
  isLanguageEN?: boolean;
}

export const HeaderGreeter = styled.h2<HeaderGreeterProps>`
  font-weight: 400;
  font-size: ${({ isLanguageEN }) => (isLanguageEN ? "2.3rem" : "2rem")};
  margin: 0;
  padding: 0;
  letter-spacing: 0.03rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    font-size: 3vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 5vw;
  }
`;

export const SpecialTextGreeter = styled.span`
  font-weight: 700;
`;

export const HeaderContent = styled.h3`
  font-weight: 700;
  margin: 0;
  padding: 0;
  font-size: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    font-size: 3.5vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 7vw;
  }
`;

export const SpecialText = styled.span`
  background-image: ${({ theme }) => theme.colors.header.text};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  transition: color ease 0.5s;
`;

export const SubHeaderContent = styled.h4`
  margin: 0;
  font-size: 1.3rem;
  font-weight: 300;
  letter-spacing: 0.03rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    font-size: 1.7vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 3.75vw;
  }
`;

export const CurlyBraces = styled.span`
  font-weight: 500;
  color: #777777;
  font-size: 3.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    font-size: 3.6vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 8vw;
  }
`;

export const Paragraph = styled.p`
  margin-top: 0;
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 0.03rem;
  line-height: 1.8;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    text-align: center;
    font-size: 1.3vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 3.3vw;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    justify-content: center;
  }
`;

export const Image = styled.img`
  border-radius: 25%;
  width: 25rem;
  height: auto;
  transition: 0.5s ease;

  &:hover {
    filter: drop-shadow(0 10px 10px ${({ theme }) => theme.colors.basic});
    /* filter: drop-shadow(0 10px 10px #aaaaaa); */
    transform: translateY(-5px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    width: 32vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    width: 36vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 70vw;
  }
`;
