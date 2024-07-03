import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../slices/themeSlice";
import openAI_black from "../assets/technologies/openai_black.png";
import openAI_white from "../assets/technologies/openai_white.png";

const useOpenAILogo = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  if (isDarkTheme) {
    return openAI_white;
  }
  return openAI_black;
};

export default useOpenAILogo;
