import {
  KeyboardButtons,
  KeyboardInstructContainer,
  KeyboardInstructText,
} from "./styled";
import { ReactComponent as ArrowUp } from "../../../../../assets/icons/keyboard/arrow-up.svg";
import { ReactComponent as ArrowRight } from "../../../../../assets/icons/keyboard/arrow-right.svg";
import { ReactComponent as ArrowDown } from "../../../../../assets/icons/keyboard/arrow-down.svg";
import { ReactComponent as ArrowLeft } from "../../../../../assets/icons/keyboard/arrow-left.svg";
import { ReactComponent as Escape } from "../../../../../assets/icons/keyboard/escape.svg";

const KeyboardInstruct = () => {
  return (
    <KeyboardInstructContainer>
      <KeyboardInstructText>
        Use <strong>Arrow Up</strong> and <strong>Arrow Down</strong> to scroll
        the page. <br /> Use <strong>Arrow Left</strong> and{" "}
        <strong>Arrow Right</strong> to change the project. <br />
        Press <strong>Escape</strong> to close the project.
      </KeyboardInstructText>
      <KeyboardButtons>
        <div className="arrow up">
          <ArrowUp />
        </div>
        <div className="arrow left">
          <ArrowLeft />
        </div>
        <div className="arrow down">
          <ArrowDown />
        </div>
        <div className="arrow right">
          <ArrowRight />
        </div>
      </KeyboardButtons>
      <KeyboardButtons>
        <div className="arrow escape">
          <Escape />
        </div>
      </KeyboardButtons>
    </KeyboardInstructContainer>
  );
};

export default KeyboardInstruct;
