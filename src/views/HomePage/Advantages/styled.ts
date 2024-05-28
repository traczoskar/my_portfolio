import styled from "styled-components";

export const AdvantagesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding: 10rem 0 15rem 0;
  transition: all ease 0.5s;
  background: ${({ theme }) => theme.colors.advantages.sectionBackground};
  color: ${({ theme }) => theme.colors.textBasic};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    padding: 3rem 0 5rem 0;
    gap: 2rem;
  }
`;

export const AdvantagesTitle = styled.h2`
  margin: 0 0 4rem 0;
  padding: 0 5rem 2rem 5rem;
  font-size: 2.5rem;
  font-weight: 700;
  border-bottom: 1px solid #ddd;
  text-shadow: -4px 6px 8px rgba(66, 68, 90, 0.2);

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    font-size: 2rem;
    padding: 0 3rem 1rem 3rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 7vw;
    padding: 0 2.5rem 1rem 2.5rem;
  }
`;

export const AdvantagesWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    padding: 0 5rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 0 1rem;
  }
`;

export const AdvantagesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorMax}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: 1fr;
  }
`;

export const AdvantagesItem = styled.li`
  display: flex;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const AdvantagesIcon = styled.div`
  display: flex;
  flex: 0 0 auto;
  width: 54px;
  height: 54px;
  padding: 15px;
  border-radius: 8px;
  background-image: ${({ theme }) => theme.colors.advantages.background};
  margin-right: 1.5rem;
  color: ${({ theme }) => theme.colors.advantages.text};
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075);
  transition: filter ease 0.3s;
  &:hover {
    filter: brightness(130%);

    svg {
      transform: scale(1.2);
    }
  }

  svg {
    width: 100%;
    height: 100%;
    transition: transform ease 0.3s;
  }
`;

export const AdvantageTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textBasic};
  font-weight: 600;
  font-size: 1.3rem;
  margin: 0;
`;

export const AdvantageDescription = styled.p`
  color: ${({ theme }) => theme.colors.advantages.textSecondary};
  margin-top: 0.5rem;
  padding: 0;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.5;
`;
