import { useDispatch, useSelector } from "react-redux";
import { Button } from "./styled";
import { selectIsLanguageEN, toggleLanguage } from "../../slices/languageSlice";

const LanguageSwitch = () => {
  const isLanguageEN = useSelector(selectIsLanguageEN);
  const dispatch = useDispatch();

  return (
    <Button
      title={
        isLanguageEN ? "Change language to Polish" : "Zmień język na angielski"
      }
      onClick={() => dispatch(toggleLanguage())}
    >
      <span className={isLanguageEN ? "active" : ""}>EN&nbsp;</span> |{" "}
      <span className={!isLanguageEN ? "active" : ""}>&nbsp;PL</span>
    </Button>
  );
};

export default LanguageSwitch;
