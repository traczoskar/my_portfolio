import styled from "styled-components";

//---Container---

export const ProjectDetailsContainer = styled.article`
  display: flex;
  flex-direction: column;

  &:focus {
    outline: none;
  }
`;

export const Section = styled.section`
  padding: 2rem 3rem;
  border-bottom: ${({ theme }) => theme.border};
`;

export const SectionTitle = styled.h3`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 600;
`;

export const SectionDivider = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

//---Header---

export const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2.5rem;
  border-bottom: ${({ theme }) => theme.border};
  margin: 0;
`;

export const ProjectHeader = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 2.2rem;
  font-weight: 700;
`;

//---Description---

export const ProjectDescription = styled.p`
  margin: 0;
  padding: 2rem 0 0 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.projectDetails.text};
  font-weight: 400;
  line-height: 1.5;
`;

//---Screenshots---

export const ScreenshotsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const ScreenshotsInstructions = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.projectDetails.text};
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
  padding: 0.35rem 0;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.projectDetails.text};
  line-height: 1.5;
`;

export const ProjectFeatureName = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.projectDetails.featureName};
`;

//---Technologies---

export const TechnologiesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
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
  background-color: ${({ theme }) =>
    theme.colors.projectDetails.techBackground};
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075);
  color: ${({ theme }) => theme.colors.projectDetails.techText};
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.projectDetails.techBackgroundHover};
    transform: scale(1.05);
    img {
      filter: grayscale(0%);
    }
  }
`;

export const TechnologyIcon = styled.img`
  width: auto;
  height: 25px;
  filter: grayscale(40%);
`;

export const TechnologySubtitle = styled.h4`
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
`;

//---What Did I Learn?---

export const WhatDidILearnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 2rem;
  border-left: ${({ theme }) => theme.border};
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
  color: ${({ theme }) => theme.colors.projectDetails.text};
  font-weight: 400;
  line-height: 1.5;
`;

//---Button---

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
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
  color: ${({ theme }) => theme.colors.projectDetails.text};
  background: ${({ theme }) => theme.colors.projectDetails.linkBackground};
  border: 2px solid #bbbbbb;
  border-radius: 2rem;
  cursor: pointer;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075);
  transition: all 0.2s;

  &:hover {
    filter: brightness(105%);
    transform: translateY(-5px);
    color: #111111;
    background-color: #eeeeee;
  }
`;

//---Navigation---

export const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const NavigationButton = styled.button`
  border: 1px solid #bbbbbb;
  background: ${({ theme }) => theme.colors.projectDetails.navButtonBG};
  color: ${({ theme }) => theme.colors.projectDetails.text};
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    outline: 2px solid
      ${({ theme }) => theme.colors.projectDetails.navButtonAccent};
    transform: scale(1.03);
    color: ${({ theme }) => theme.colors.projectDetails.navButtonText};
    filter: brightness(105%);
    box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075);
  }

  &:active {
    filter: brightness(80%);
    transform: scale(0.95);
    box-shadow: none;
  }

  &:disabled:hover {
    transform: none;
    filter: none;
    box-shadow: none;
  }
  &:disabled {
    color: #bbbbbb;
    background-color: #dddddd;
    color: #555555;
    cursor: not-allowed;
  }
`;
