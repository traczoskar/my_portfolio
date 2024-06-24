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
  SectionTitle,
} from "./styled";
import { ReactComponent as GitHubIcon } from "../../../../assets/icons/git_icon.svg";
import { ReactComponent as LiveIcon } from "../../../../assets/icons/www.svg";
import ScreenshotGallery from "./ScreenshotGallery";
import { useEffect, useRef, useState } from "react";
import KeyboardInstruct from "./KeyboardInstruct";
import { useMediaQuery } from "react-responsive";
import AdditionalData from "./AdditionalData";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen } = useSelector(selectProjectDetailsState);
  const projectIndex: number = projects.findIndex((p) => p.route === id);
  const project: Project | undefined = projects[projectIndex];
  const containerRef = useRef<HTMLDivElement>(null);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState<boolean>(false);
  const isTabletHorizontal: boolean = useMediaQuery({
    query: `(max-width: 1199px)`,
  });
  const isMobile: boolean = useMediaQuery({
    query: `(max-width: 767px)`,
  });

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
      <ProjectDetailsContainer
        aria-label="Project Details"
        ref={containerRef}
        tabIndex={-1}
      >
        {
          //---Header---
        }
        <HeaderSection>
          <ProjectHeader>
            {project?.icon} {project?.label}
          </ProjectHeader>
          {!isTabletHorizontal && <KeyboardInstruct />}
          <NavigationWrapper>
            <NavigationButton
              onClick={handlePreviousProject}
              disabled={projectIndex <= 0}
            >
              {isMobile ? "<" : "Previous Project"}
            </NavigationButton>
            <NavigationButton
              onClick={handleNextProject}
              disabled={projectIndex >= projects.length - 1}
            >
              {isMobile ? ">" : "Next Project"}
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
        {
          //---Technologies & WhatDidILearn---
        }
        <AdditionalData project={project} />
        {
          //---Buttons---
        }
        <Section $borderBottom="none">
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
