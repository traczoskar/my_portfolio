import { Typewriter } from "react-simple-typewriter";
import { DefaultTheme } from "styled-components/dist/types";
import styled from "styled-components";

const Cursor = styled.span`
  font-weight: 300;
  color: ${({ theme }: DefaultTheme) => theme.colors.basic};
  transition: color ease 0.5s;
`;

interface TypingLineProps {
  content: string[];
}

export const TypingLine = ({ content }: TypingLineProps) => {
  return (
    <Typewriter
      words={content}
      loop={true}
      cursor={true}
      cursorBlinking={true}
      cursorStyle={<Cursor>|</Cursor>}
      typeSpeed={120}
      deleteSpeed={80}
      delaySpeed={3000}
    />
  );
};
