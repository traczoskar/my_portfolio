import styled from "styled-components";

export const ProjectDetailsContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

export const ProjectHeader = styled.h2`
  margin: 2rem 0 0 0;
  padding: 0 2rem 2rem 2rem;
  font-size: 2rem;
  font-weight: 700;
  border-bottom: 1px solid #ddd;
`;

export const ProjectDescriptionTitle = styled.h3`
  margin: 0;
  padding: 2rem 0 0 2rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ProjectDescription = styled.p`
  margin: 0;
  padding: 2rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  border-bottom: 1px solid #ddd;
`;

export const ProjectFeatureList = styled.ul`
  padding: 2rem 2rem 2rem 3rem;
  margin: 0;
  list-style-type: disc;
  border-bottom: 1px solid #ddd;
`;

export const ProjectFeature = styled.li`
  margin: 0;
  padding: 0.25rem 0;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
`;

export const ProjectFeatureName = styled.span`
  font-weight: 600;
`;

export const TechnologiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem 1rem 2rem 2rem;
`;

export const TechnologyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
`;

export const TechnologyIcon = styled.img`
  width: auto;
  height: 50px;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
  }
`;

export const TechnologySubtitle = styled.h4`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 0.8rem;
`;
