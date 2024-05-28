import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

interface FooterWrapperProps {
  backgroundColor: string;
}

export const FooterWrapper = styled.footer<FooterWrapperProps>`
  position: relative;
  background: ${({ backgroundColor }) => backgroundColor};
  z-index: 1;
  padding-bottom: 4.5rem;
  text-align: center;
  margin-top: auto;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  z-index: 999;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    flex-direction: column;
  }
`;

export const HeaderLink = styled(HashLink)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  letter-spacing: 0.005rem;
  padding: 0.5rem 0;

  transition: 0.3s;
  cursor: pointer;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.basic};

    .logo-stroke {
      stroke: ${({ theme }) => theme.colors.basic};
    }
  }

  &:active {
    transform: scale(0.9);
    filter: brightness(90%);
  }
`;

export const LetsChat = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  /* background-color: #f9ad66; */
  background-color: ${({ theme }) => theme.colors.footer.button.background};
  /* color: #333333; */
  color: ${({ theme }) => theme.colors.footer.button.text};
  padding: 1.5rem 2rem;
  font-weight: 500;
  border-radius: 2rem;
  font-size: 1.1rem;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075);
  cursor: pointer;
  transition: 0.1s ease;

  &:hover {
    background-color: #444444;
    color: white;
    outline: 1px solid #eeeeee;
  }
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const SocialLink = styled.a`
  color: inherit;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    svg {
      filter: brightness(130%);
    }
  }
`;
