import { useMediaQuery } from "react-responsive";
import { Project } from "../../../../../types/types";
import { technologies } from "../../technologies";
import {
  Section,
  SectionDivider,
  SectionTitle,
  TechnologiesWrapper,
  TechnologyContainer,
  TechnologyIcon,
  TechnologySubtitle,
  WhatDidILearnItem,
  WhatDidILearnList,
  WhatDidILearnWrapper,
} from "../styled";
import useOpenAILogo from "../../../../../hooks/useOpenAILogo";
import { selectIsLanguageEN } from "../../../../../slices/languageSlice";
import { useSelector } from "react-redux";

interface AdditionalDataProps {
  project: Project | undefined;
}

const AdditionalData: React.FC<AdditionalDataProps> = ({ project }) => {
  const isTabletVertical: boolean = useMediaQuery({
    query: `(max-width: 991px)`,
  });
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);
  const openAILogo = useOpenAILogo();

  switch (isTabletVertical) {
    case false:
      return (
        <Section>
          <SectionDivider>
            {
              //---Technologies Used---
            }
            <div>
              <SectionTitle>
                {isLanguageEN ? "Technologies Used" : "Zastosowane technologie"}{" "}
                🛠
              </SectionTitle>
              {project?.tech ? (
                <TechnologiesWrapper>
                  {project?.tech.map((tech) => (
                    <TechnologyContainer key={tech}>
                      <TechnologyIcon
                        src={
                          technologies.find((t) => t.name === tech)?.icon ||
                          openAILogo
                        }
                        alt={tech}
                      />
                      <TechnologySubtitle>{tech}</TechnologySubtitle>
                    </TechnologyContainer>
                  ))}
                </TechnologiesWrapper>
              ) : (
                <p>Sorry 😭 - technologies not available for this project</p>
              )}
            </div>
            {
              //---What Did I Learn?---
            }
            <WhatDidILearnWrapper>
              <SectionTitle>
                {isLanguageEN ? "What Did I Learn?" : "Czego się nauczyłem?"} 📚
              </SectionTitle>
              {project?.whatDidILearn ? (
                <WhatDidILearnList>
                  {(isLanguageEN
                    ? project.whatDidILearn.en
                    : project.whatDidILearn.pl
                  ).map((listItem, index) => (
                    <WhatDidILearnItem key={index}>
                      {listItem}
                    </WhatDidILearnItem>
                  ))}
                </WhatDidILearnList>
              ) : (
                <p>Sorry 😭 - learning points not available for this project</p>
              )}
            </WhatDidILearnWrapper>
          </SectionDivider>
        </Section>
      );
    case true:
      return (
        <>
          <Section>
            {
              //---Technologies Used---
            }

            <SectionTitle>
              {isLanguageEN ? "Technologies Used" : "Zastosowane technologie"} 🛠
            </SectionTitle>
            {project?.tech ? (
              <TechnologiesWrapper>
                {project?.tech.map((tech) => (
                  <TechnologyContainer key={tech}>
                    <TechnologyIcon
                      src={
                        technologies.find((t) => t.name === tech)?.icon ||
                        openAILogo
                      }
                      alt={tech}
                    />
                    <TechnologySubtitle>{tech}</TechnologySubtitle>
                  </TechnologyContainer>
                ))}
              </TechnologiesWrapper>
            ) : (
              <p>Sorry 😭 - technologies not available for this project</p>
            )}
          </Section>
          {
            //---What Did I Learn?---
          }
          <Section>
            <SectionTitle>
              {isLanguageEN ? "What Did I Learn?" : "Czego się nauczyłem?"} 📚
            </SectionTitle>
            {project?.whatDidILearn ? (
              <WhatDidILearnList>
                {(isLanguageEN
                  ? project.whatDidILearn.en
                  : project.whatDidILearn.pl
                ).map((listItem, index) => (
                  <WhatDidILearnItem key={index}>{listItem}</WhatDidILearnItem>
                ))}
              </WhatDidILearnList>
            ) : (
              <p>Sorry 😭 - learning points not available for this project</p>
            )}
          </Section>
        </>
      );
    default:
      return null;
  }
};

export default AdditionalData;
