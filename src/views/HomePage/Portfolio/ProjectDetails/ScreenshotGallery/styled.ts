import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;
