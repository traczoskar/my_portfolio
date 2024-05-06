import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../../common/Modal";
import {
  closeProjectDetails,
  selectProjectDetailsState,
} from "../../../../slices/projectDetailsSlice";
import { Project } from "../../../../types/types";
import { projects } from "../portfolioList";
import {
  ButtonsWrapper,
  LinkButton,
  ProjectDescription,
  ProjectDetailsContainer,
  ProjectFeature,
  ProjectFeatureList,
  ProjectFeatureName,
  ProjectHeader,
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
} from "./styled";
import { technologies } from "../technologies";
import { ReactComponent as GitHubIcon } from "../../../../assets/icons/git_icon.svg";
import { ReactComponent as LiveIcon } from "../../../../assets/icons/www.svg";

const ProjectDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen } = useSelector(selectProjectDetailsState);
  const project: Project | undefined = projects.find((p) => p.route === id);

  const handleClose = () => {
    dispatch(closeProjectDetails());
    navigate(-1);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ProjectDetailsContainer>
        {
          //---Header---
        }
        <ProjectHeader>
          {project?.icon} {project?.label}
        </ProjectHeader>
        {
          //---Description---
        }
        {project?.description && (
          <Section>
            <SectionTitle>Description</SectionTitle>
            <ProjectDescription>{project?.description}</ProjectDescription>
          </Section>
        )}
        {
          //---Features---
        }
        {project?.features && (
          <Section>
            <SectionTitle>Features ✅</SectionTitle>
            <ProjectFeatureList>
              {project.features.map((feature, index) => (
                <ProjectFeature key={index}>
                  <ProjectFeatureName>{feature.name}</ProjectFeatureName>
                  {`: ${feature.content}`}
                </ProjectFeature>
              ))}
            </ProjectFeatureList>
          </Section>
        )}
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
                    <TechnologyContainer>
                      <TechnologyIcon
                        key={tech}
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
        <Section>
          <ButtonsWrapper>
            <LinkButton href={project?.repo} target="_blank">
              <GitHubIcon width={30} height={30} />
              GitHub Repository
            </LinkButton>
            <LinkButton href={project?.live} target="_blank">
              <LiveIcon width={30} height={30} />
              Live Demo
            </LinkButton>
          </ButtonsWrapper>
        </Section>
      </ProjectDetailsContainer>
    </Modal>
  );
};

export default ProjectDetails;
