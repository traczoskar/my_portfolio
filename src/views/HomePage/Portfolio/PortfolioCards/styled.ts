import styled from "styled-components";
import { motion } from "framer-motion";

//---Container---

export const CardsContainer = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    flex-direction: column;
    align-items: center;
  }
`;

//---Navigation---

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.projects.primary};
  padding: 0.75rem;
  margin-right: 5px;
  border-radius: 1rem;
  border-right: 1px solid ${({ theme }) => theme.colors.projects.border};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    width: 100%;
    margin: 0;
  }
`;

export const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  flex-grow: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobileMax}) {
    grid-template-columns: 1fr;
    gap: 0.3rem;
  }
`;

export const ProjectTab = styled.li`
  position: relative;
  list-style: none;
  margin: 0;
  color: ${({ theme }) => theme.colors.textBasic};
  font-weight: 500;
  padding-left: 1.5rem;
  font-size: 1.1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.projects.tabBackground};
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  border: 0.75px solid ${({ theme }) => theme.colors.projects.tabBorder};
  flex-grow: 1;
  transition: 0.3s ease;
  gap: 0.75rem;

  &:hover {
    transform: scale(1.02);
    filter: brightness(110%);
  }

  &.selected {
    background: ${({ theme }) => theme.colors.projects.selectedBackground};
    color: ${({ theme }) => theme.colors.projects.selectedText};
    border: 0.75px solid #ffffff;
    box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    font-size: 1.4vw;
    padding: 1.25rem 1rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
    font-size: 1.5vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 1.5rem;
    font-size: 2.3vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobileMax}) {
    padding: 1rem 0.75rem;
    font-size: 3vw;
  }
`;

export const ProjectIcon = styled.span`
  font-size: 1.3rem;
  filter: drop-shadow(1px 3px 4px rgba(25, 25, 25, 0.35));
`;

export const Details = styled(motion.button)`
  position: absolute;
  right: 15px;
  background: #555555;
  border: 1px solid #dddddd;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-size: 0.7rem;
  font-weight: 400;
  justify-content: center;
  padding: 0.5rem 1rem;
  transition: 0.2s ease;
  box-shadow: 0px 4px 8px rgba(66, 68, 90, 0.35);

  &:hover {
    filter: brightness(125%);
    transform: scale(1.1);
  }

  &:active {
    filter: brightness(150%);
  }
`;

export const DetailsMobile = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 15px;
  width: 2rem;
  height: 2rem;
  background: #555555;
  border: 1px solid #dddddd;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0;
  transition: 0.2s ease;
  box-shadow: 0px 4px 8px rgba(66, 68, 90, 0.35);

  &:hover {
    filter: brightness(125%);
    transform: scale(1.1);
  }

  &:active {
    filter: brightness(150%);
  }
`;

//---Project View---

export const ProjectPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  background-color: #aaaaaa;
  align-items: center;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 857px;
  aspect-ratio: 16 / 9;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  transition: all ease 0.3s;

  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
    outline-offset: 0;
    outline: 4px solid ${({ theme }) => theme.colors.basic};
  }

  @media (max-width: 1750px) {
    width: 50vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.laptopMax}) {
    width: 58vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    width: 100%;
  }
`;

export const ProjectImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: fill;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 1rem;
  cursor: pointer;
`;
