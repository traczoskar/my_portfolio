import { useSelector } from "react-redux";
import Keyboard from "./Keyboard";
import { KeyboardInstructContainer, KeyboardInstructText } from "./styled";
import { selectIsLanguageEN } from "../../../../../slices/languageSlice";

const KeyboardInstruct = () => {
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);
  return (
    <KeyboardInstructContainer>
      <KeyboardInstructText>
        {isLanguageEN ? (
          <>
            Use <strong>Arrow Up</strong> and <strong>Arrow Down</strong> to
            scroll the page. <br /> Use <strong>Arrow Left</strong> and{" "}
            <strong>Arrow Right</strong> to change the project. <br />
            Press <strong>Escape</strong> to close the project.
          </>
        ) : (
          <>
            Użyj <strong>Strzałki w górę</strong> i{" "}
            <strong>Strzałki w dół </strong>
            aby przewinąć stronę. <br /> Użyj <strong>
              Strzałki w lewo
            </strong> i <strong>Strzałki w prawo</strong> aby zmienić projekt.{" "}
            <br />
            Naciśnij <strong>Escape</strong> aby zamknąć projekt.
          </>
        )}
      </KeyboardInstructText>
      <Keyboard />
    </KeyboardInstructContainer>
  );
};

export default KeyboardInstruct;
