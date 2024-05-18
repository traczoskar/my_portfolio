import Keyboard from "./Keyboard";
import { KeyboardInstructContainer, KeyboardInstructText } from "./styled";

const KeyboardInstruct = () => {
  return (
    <KeyboardInstructContainer>
      <KeyboardInstructText>
        Use <strong>Arrow Up</strong> and <strong>Arrow Down</strong> to scroll
        the page. <br /> Use <strong>Arrow Left</strong> and{" "}
        <strong>Arrow Right</strong> to change the project. <br />
        Press <strong>Escape</strong> to close the project.
      </KeyboardInstructText>
      <Keyboard />
    </KeyboardInstructContainer>
  );
};

export default KeyboardInstruct;
