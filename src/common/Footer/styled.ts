import styled from "styled-components";
import { ReactComponent as WavesSVG } from "../../assets/waves.svg";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export const FooterWrapper = styled.footer`
  position: relative;
  background-color: #ffffff;
  color: #000000;
  z-index: 1;
  padding-bottom: 10rem;
  text-align: center;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  z-index: 999;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeaderLink = styled(HashLink)`
  text-decoration: none;
  display: flex;
  gap: 1.25rem;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  letter-spacing: 0.005rem;
  padding: 0.5rem 0;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-image: ${({ theme }) => theme.colors.header.text};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  &:visited {
    color: inherit;
  }
  &:active {
    filter: brightness(130%);
  }
`;

export const LetsChat = styled(Link)`
  text-decoration: none;
  background-color: #00b894;
  color: #ffffff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #00a88c;
  }
`;

export const StyledWavesSVG = styled(WavesSVG)`
  width: 100%;
  height: auto;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
  line-height: 0;
`;
