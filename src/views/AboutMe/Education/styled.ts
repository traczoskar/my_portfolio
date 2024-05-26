import styled from "styled-components";

export const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  padding: 2rem;
  gap: 3rem;
  background-color: white;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 2rem;
`;

export const EducationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0;
  list-style: none;
  padding: 0;
`;

export const EducationItem = styled.li`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
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
`;

export const EducationName = styled.p`
  font-weight: 500;
  margin: 0;
  font-size: 1.3rem;
`;

export const CourseDescription = styled.p`
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.5;
  text-align: justify;
`;

export const CourseInfo = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CourseAdditional = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #555;
`;

export const GridDivider = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
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
  color: #555;
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
`;
