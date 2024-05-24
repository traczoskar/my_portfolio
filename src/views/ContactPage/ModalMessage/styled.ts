import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.contactPage.modal.text};
  background-color: ${({ theme }) => theme.colors.contactPage.modal.background};
  padding: 1rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;
