import { advantagesList } from "./advantagesList";
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

const Advantages = () => {
  return (
    <>
      <AdvantagesSection>
        <AdvantagesTitle>Why choose me?</AdvantagesTitle>
        <AdvantagesWrapper>
          <AdvantagesList>
            {advantagesList.map((advantage) => (
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
            ))}
          </AdvantagesList>
        </AdvantagesWrapper>
      </AdvantagesSection>
    </>
  );
};

export default Advantages;
