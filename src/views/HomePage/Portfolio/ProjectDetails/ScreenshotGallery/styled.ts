import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 2rem 0;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  cursor: zoom-in;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
    outline: 5px solid
      ${({ theme }) => theme.colors.projectDetails.screenshotOutline};
  }
`;
