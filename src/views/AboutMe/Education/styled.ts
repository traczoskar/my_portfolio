import styled from "styled-components";

interface EducationItemProps {
  background?: string;
}

export const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  max-width: 1200px;
  margin: 3rem 0 8rem 0;
  gap: 3rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    padding: 0 5vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 2rem 0 3rem 0;
  }
`;

export const Title = styled.h3`
  align-self: flex-start;
  margin: 0;
  font-weight: 800;
  font-size: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    align-self: center;
    font-size: 8vw;
  }
`;

export const EducationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0;
  list-style: none;
  padding: 0;
`;

export const EducationItem = styled.li<EducationItemProps>`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  background: ${({ background }) => background};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 1.25rem;
  }
`;

export const CourseOverview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CourseTitle = styled.h4`
  font-weight: 800;
  font-size: 1.5rem;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 5vw;
  }
`;

export const EducationName = styled.p`
  font-weight: 500;
  margin: 0;
  font-size: 1.3rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 4vw;
  }
`;

export const CourseDescription = styled.p`
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.5;
  text-align: justify;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 3.5vw;
  }
`;

export const CourseInfo = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CourseAdditional = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.aboutMePage.education.additionalText};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 3.5vw;
  }
`;

export const GridDivider = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    grid-template-columns: 1fr;
  }
`;

export const CertificateContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CertificateInstructions = styled.p`
  margin: 1rem 0 0 0;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.aboutMePage.education.additionalText};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 0.7rem;
  }
`;

export const Certificate = styled.img`
  width: auto;
  height: 250px;
  border: 1px solid #ddd;
  justify-self: center;
  border-radius: 0.5rem;
  transition: all 0.3s;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);

  &:hover {
    cursor: zoom-in;
    outline: 3px solid ${({ theme }) => theme.colors.basic};
    transform: scale(1.05);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    height: 45vw;
  }
`;
