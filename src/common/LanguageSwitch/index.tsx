import { useDispatch, useSelector } from "react-redux";
import { Button } from "./styled";
import { selectIsLanguageEN, toggleLanguage } from "../../slices/languageSlice";

interface LanguageSwitchProps {
  onClick?: () => void;
  isOnModal?: boolean;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  onClick,
  isOnModal,
}) => {
  const isLanguageEN = useSelector(selectIsLanguageEN);
  const dispatch = useDispatch();

  return (
    <Button
      $isOnModal={isOnModal}
      title={
        isLanguageEN ? "Change language to Polish" : "Zmień język na angielski"
      }
      onClick={() => {
        dispatch(toggleLanguage());
        if (onClick) {
          onClick();
        }
      }}
    >
      {isOnModal ? (
        <span className="active">{isLanguageEN ? "PL" : "EN"}</span>
      ) : (
        <>
          <span className={isLanguageEN ? "active" : ""}>EN&nbsp;</span> |{" "}
          <span className={!isLanguageEN ? "active" : ""}>&nbsp;PL</span>
        </>
      )}
    </Button>
  );
};

export default LanguageSwitch;
