import styled from "styled-components";

//---Container---

export const ProjectDetailsContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  padding: 2rem 3rem;
  border-bottom: 1px solid #ddd;
`;

export const SectionTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const SectionDivider = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

//---Header---

export const ProjectHeader = styled.h2`
  margin: 2rem 0 0 0;
  padding: 0 2rem 2rem 2rem;
  font-size: 2rem;
  font-weight: 700;
  border-bottom: 1px solid #ddd;
`;

//---Description---

export const ProjectDescription = styled.p`
  margin: 0;
  padding: 2rem 0 0 0;
  font-size: 1.2rem;
  color: #555555;
  font-weight: 400;
  line-height: 1.5;
`;

//---Features---

export const ProjectFeatureList = styled.ul`
  padding: 2rem 0 0 2rem;
  margin: 0;
  list-style-type: disc;
`;

export const ProjectFeature = styled.li`
  margin: 0;
  padding: 0.25rem 0;
  font-size: 1.2rem;
  font-weight: 400;
  color: #555555;
  line-height: 1.5;
`;

export const ProjectFeatureName = styled.span`
  font-weight: 600;
  color: #111111;
`;

//---Technologies---

export const TechnologiesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem 0;
`;

export const TechnologyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  border-radius: 0.75rem;
  border: 0.5px solid #aaaaaa;
  background-color: #dddddd;
  color: #222222;
`;

export const TechnologyIcon = styled.img`
  width: auto;
  height: 25px;
  filter: grayscale(40%);

  &:hover {
    filter: grayscale(0%);
  }
`;

export const TechnologySubtitle = styled.h4`
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
  /* background-color: #eeeeee;
  border-radius: 1rem; */
`;

//---What Did I Learn?---

export const WhatDidILearnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 2rem;
  border-left: 1px solid #ddd;
`;

export const WhatDidILearnList = styled.ul`
  padding: 0.5rem 0 0 1.5rem;
  margin: 0;
  list-style-type: disc;
`;

export const WhatDidILearnItem = styled.li`
  margin: 0;
  padding: 0.75rem 0;
  font-size: 1.1rem;
  color: #555555;
  font-weight: 400;
  line-height: 1.5;
`;

//---Button---

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
  margin: 2rem;
`;

export const LinkButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 50%;

  padding: 0.75rem 2rem;
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  color: #555555;
  background-color: #dddddd;
  border: 2px solid #bbbbbb;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #111111;
    background-color: #eeeeee;
  }
`;
