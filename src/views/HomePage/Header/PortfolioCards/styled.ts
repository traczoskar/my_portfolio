import styled from "styled-components";

export const CardsContainer = styled.section`
  width: 600px;
  height: 455px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.projects.primary};
  margin: 0;
  padding: 0;
  overflow: hidden;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.projects.primary};
  padding: 5px 5px 0;
  margin-bottom: 5px;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid #eeeeee;
  height: 50px;
  display: flex;
`;

export const ProjectList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;

export const ProjectTab = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;

  color: ${({ theme }) => theme.colors.projects.text};
  font-weight: 500;
  font-size: 12px;
  border-radius: 15px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.projects.secondary};
  position: relative;
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  user-select: none;

  &.selected {
    background: ${({ theme }) => theme.colors.projects.selected};
  }
`;

export const UnderlineSpan = styled.span`
  background: ${({ theme }) => theme.colors.header.text};
`;

export const ProjectContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  width: 600px;
  user-select: none;
  height: 400px;
  user-select: none;
  overflow: hidden;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transition: ease 0.75s;
  cursor: pointer;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
  }
`;
