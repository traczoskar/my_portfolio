import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../../common/Modal";
import {
  closeProjectDetails,
  openProjectDetails,
  selectProjectDetailsState,
} from "../../../../slices/projectDetailsSlice";
import { Project } from "../../../../types/types";
import { projects } from "../portfolioList";
import {
  ButtonsWrapper,
  HeaderSection,
  LinkButton,
  NavigationButton,
  NavigationWrapper,
  ProjectDescription,
  ProjectDetailsContainer,
  ProjectFeature,
  ProjectFeatureList,
  ProjectFeatureName,
  ProjectHeader,
  ScreenshotsInstructions,
  ScreenshotsWrapper,
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
import ScreenshotGallery from "./ScreenshotGallery";
import { useEffect, useRef, useState } from "react";
import KeyboardInstruct from "./KeyboardInstruct";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen } = useSelector(selectProjectDetailsState);
  const projectIndex: number = projects.findIndex((p) => p.route === id);
  const project: Project | undefined = projects[projectIndex];
  const containerRef = useRef<HTMLDivElement>(null);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      dispatch(openProjectDetails(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isImageViewerOpen) return;

      if (event.key === "Escape") {
        handleClose();
      } else if (event.key === "ArrowRight") {
        handleNextProject();
      } else if (event.key === "ArrowLeft") {
        handlePreviousProject();
      } else if (event.key === "ArrowUp") {
        window.scrollBy(0, -100);
      } else if (event.key === "ArrowDown") {
        window.scrollBy(0, 100);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [projectIndex, isImageViewerOpen]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, [isOpen]);

  const handleClose = () => {
    dispatch(closeProjectDetails());
    navigate("/#projects");
  };

  const handleNextProject = () => {
    if (projectIndex < projects.length - 1) {
      navigate(`/projects/${projects[projectIndex + 1].route}`);
    }
  };

  const handlePreviousProject = () => {
    if (projectIndex > 0) {
      navigate(`/projects/${projects[projectIndex - 1].route}`);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ProjectDetailsContainer ref={containerRef} tabIndex={-1}>
        {
          //---Header---
        }
        <HeaderSection>
          <ProjectHeader>
            {project?.icon} {project?.label}
          </ProjectHeader>
          <KeyboardInstruct />
          <NavigationWrapper>
            <NavigationButton
              onClick={handlePreviousProject}
              disabled={projectIndex <= 0}
            >
              Previous Project
            </NavigationButton>
            <NavigationButton
              onClick={handleNextProject}
              disabled={projectIndex >= projects.length - 1}
            >
              Next Project
            </NavigationButton>
          </NavigationWrapper>
        </HeaderSection>

        {
          //---Description---
        }
        {project?.description && (
          <Section>
            <SectionTitle>Description 🗒</SectionTitle>
            <ProjectDescription>{project?.description}</ProjectDescription>
          </Section>
        )}
        {
          //---Screenshots---
        }
        <Section>
          <ScreenshotsWrapper>
            <SectionTitle>Screenshots 📸</SectionTitle>
            <ScreenshotsInstructions>
              Click on the thumbnail to view the screenshot in a larger size 🔍
            </ScreenshotsInstructions>
          </ScreenshotsWrapper>

          <ScreenshotGallery
            screenshots={project?.screenshots}
            onOpenViewer={() => setIsImageViewerOpen(true)}
            onCloseViewer={() => setIsImageViewerOpen(false)}
          />
        </Section>
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
