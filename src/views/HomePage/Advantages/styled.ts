import styled from "styled-components";

export const AdvantagesSection = styled.section`
  padding-top: 10rem;
  background-color: ${({ theme }) => theme.colors.section.primary};
  color: ${({ theme }) => theme.colors.text};
`;

export const AdvantagesWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

export const AdvantagesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const AdvantagesItem = styled.li`
  display: flex;
  padding: 0;
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
  color: #444444;
  margin-top: 0.5rem;
  padding: 0;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.5;
`;
