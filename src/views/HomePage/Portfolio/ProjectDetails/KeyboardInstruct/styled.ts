import styled from "styled-components";

export const KeyboardInstructContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  padding: 0;
`;

export const KeyboardInstructText = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.projectDetails.keyboardInstruct};
  font-weight: 400;
  line-height: 1.75;
`;
