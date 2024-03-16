import { advantagesList } from "./advantagesList";
import {
  AdvantageDescription,
  AdvantageTitle,
  AdvantagesIcon,
  AdvantagesItem,
  AdvantagesList,
  AdvantagesSection,
  AdvantagesWrapper,
} from "./styled";

const Advantages = () => {
  return (
    <>
      <AdvantagesSection>
        <AdvantagesWrapper>
          <AdvantagesList>
            {advantagesList.map((advantage) => (
              <AdvantagesItem key={advantage.title}>
                <AdvantagesIcon>
                  <advantage.icon />
                </AdvantagesIcon>
                <div>
                  <AdvantageTitle>{advantage.title}</AdvantageTitle>
                  <AdvantageDescription>
                    {advantage.description}
                  </AdvantageDescription>
                </div>
              </AdvantagesItem>
            ))}
          </AdvantagesList>
        </AdvantagesWrapper>
      </AdvantagesSection>
    </>
  );
};

export default Advantages;
