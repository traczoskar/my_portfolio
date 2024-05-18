import { ReactComponent as ArrowKey } from "../../../../../../assets/icons/keyboard/arrow_key.svg";
import { ReactComponent as ESC } from "../../../../../../assets/icons/keyboard/esc.svg";
import { KeyboardButtons } from "./styled";

const Keyboard = () => {
  return (
    <>
      <KeyboardButtons>
        <div className="arrow up">
          <ArrowKey />
        </div>
        <div className="arrow left">
          <ArrowKey style={{ transform: "rotate(-90deg)" }} />
        </div>
        <div className="arrow down">
          <ArrowKey style={{ transform: "rotate(180deg)" }} />
        </div>
        <div className="arrow right">
          <ArrowKey style={{ transform: "rotate(90deg)" }} />
        </div>
      </KeyboardButtons>
      <KeyboardButtons>
        <div className="arrow escape">
          <ESC />
        </div>
      </KeyboardButtons>
    </>
  );
};

export default Keyboard;
