import styled from "styled-components";

export const ContactPageWrapper = styled.section`
  margin: 0 auto;
  max-width: 1200px;
`;

export const ContactTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin: 2rem 0;
`;

export const SpecialText = styled.span`
  color: orange;
`;

export const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 5rem 0;
`;

export const ContactLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 1px solid #444444;
  border-radius: 3rem;
  padding: 1.5rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #444444;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #777777;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
