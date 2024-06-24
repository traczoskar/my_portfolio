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

interface AdditionalDataProps {
  project: Project | undefined;
}

const AdditionalData: React.FC<AdditionalDataProps> = ({ project }) => {
  const isTabletVertical: boolean = useMediaQuery({
    query: `(max-width: 991px)`,
  });

  switch (isTabletVertical) {
    case false:
      return (
        <Section>
          <SectionDivider>
            {
              //---Technologies Used---
            }
            <div>
              <SectionTitle>Technologies Used 🛠 </SectionTitle>
              {project?.tech ? (
                <TechnologiesWrapper>
                  {project?.tech.map((tech) => (
                    <TechnologyContainer key={tech}>
                      <TechnologyIcon
                        src={technologies.find((t) => t.name === tech)?.icon}
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
              <SectionTitle>What Did I Learn? 📚</SectionTitle>
              {project?.whatDidILearn ? (
                <WhatDidILearnList>
                  {project?.whatDidILearn?.map((listItem, index) => (
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

            <SectionTitle>Technologies Used 🛠 </SectionTitle>
            {project?.tech ? (
              <TechnologiesWrapper>
                {project?.tech.map((tech) => (
                  <TechnologyContainer key={tech}>
                    <TechnologyIcon
                      src={technologies.find((t) => t.name === tech)?.icon}
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
            <SectionTitle>What Did I Learn? 📚</SectionTitle>
            {project?.whatDidILearn ? (
              <WhatDidILearnList>
                {project?.whatDidILearn?.map((listItem, index) => (
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
