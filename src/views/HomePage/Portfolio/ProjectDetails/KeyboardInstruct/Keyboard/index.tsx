import { ReactComponent as ArrowUp } from "../../../../../../assets/icons/keyboard/arrow-up.svg";
import { ReactComponent as ArrowRight } from "../../../../../../assets/icons/keyboard/arrow-right.svg";
import { ReactComponent as ArrowDown } from "../../../../../../assets/icons/keyboard/arrow-down.svg";
import { ReactComponent as ArrowLeft } from "../../../../../../assets/icons/keyboard/arrow-left.svg";
import { ReactComponent as Escape } from "../../../../../../assets/icons/keyboard/escape.svg";
import { KeyboardButtons } from "./styled";

const Keyboard = () => {
  return (
    <>
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
    </>
  );
};

export default Keyboard;
