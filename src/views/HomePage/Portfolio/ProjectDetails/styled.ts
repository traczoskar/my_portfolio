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
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5;
  border-bottom: 1px solid #ddd;
`;

export const ProjectFeatureList = styled.ul`
  padding: 2rem 2rem 2rem 3rem;
  margin: 0;
  list-style-type: disc;
`;

export const ProjectFeature = styled.li`
  margin: 0;
  padding: 0.25rem 0;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5;
`;

export const ProjectFeatureName = styled.span`
  font-weight: 600;
`;
