import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
`;

export const Picture = styled.img`
  width: 30%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 70%;
  }
`;
