import styled from "styled-components";

export const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: wihte;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const EducationList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const EducationItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

export const EducationTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const EducationDescription = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const EducationDate = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

export const CertificateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
`;

export const Certificate = styled.img`
  width: 200px;
  height: auto;
  margin-top: 1rem;
`;
