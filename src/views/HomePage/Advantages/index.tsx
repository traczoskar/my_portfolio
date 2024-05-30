import { useSelector } from "react-redux";
import { advantagesList, advantagesListPL } from "./advantagesList";
import {
  AdvantageDescription,
  AdvantageTextContainer,
  AdvantageTitle,
  AdvantagesIcon,
  AdvantagesItem,
  AdvantagesList,
  AdvantagesSection,
  AdvantagesTitle,
  AdvantagesWrapper,
} from "./styled";
import { selectIsLanguageEN } from "../../../slices/languageSlice";

const Advantages = () => {
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);

  return (
    <>
      <AdvantagesSection>
        <AdvantagesTitle>Why choose me?</AdvantagesTitle>
        <AdvantagesWrapper>
          <AdvantagesList>
            {(isLanguageEN ? advantagesList : advantagesListPL).map(
              (advantage) => (
                <AdvantagesItem key={advantage.title}>
                  <AdvantagesIcon>
                    <advantage.icon />
                  </AdvantagesIcon>
                  <AdvantageTextContainer>
                    <AdvantageTitle>{advantage.title}</AdvantageTitle>
                    <AdvantageDescription>
                      {advantage.description}
                    </AdvantageDescription>
                  </AdvantageTextContainer>
                </AdvantagesItem>
              )
            )}
          </AdvantagesList>
        </AdvantagesWrapper>
      </AdvantagesSection>
    </>
  );
};

export default Advantages;
