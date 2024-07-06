import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useRef, useState } from "react";
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

import KeyboardInstruct from "./KeyboardInstruct";
import { useMediaQuery } from "react-responsive";
import AdditionalData from "./AdditionalData";
import useScrollToTop from "../../../../hooks/useScrollToTop";
import { selectIsLanguageEN } from "../../../../slices/languageSlice";
import { Helmet } from "react-helmet-async";

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
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);

  const handleClose = useCallback(() => {
    dispatch(closeProjectDetails());
    navigate("/#projects");
  }, [dispatch, navigate]);

  const handleNextProject = useCallback(() => {
    if (projectIndex < projects.length - 1) {
      navigate(`/projects/${projects[projectIndex + 1].route}`);
    }
  }, [navigate, projectIndex]);

  const handlePreviousProject = useCallback(() => {
    if (projectIndex > 0) {
      navigate(`/projects/${projects[projectIndex - 1].route}`);
    }
  }, [navigate, projectIndex]);

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
  }, [
    isImageViewerOpen,
    handlePreviousProject,
    handleClose,
    handleNextProject,
  ]);

  useEffect(() => {
    if (id) {
      dispatch(openProjectDetails(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, [isOpen]);

  useScrollToTop();

  return (
    <Modal
      isOpen={isOpen}
      isImageViewerOpen={isImageViewerOpen}
      onClose={handleClose}
    >
      <Helmet>
        <title>
          {isLanguageEN
            ? `traczoskar.dev - ${project?.label.en}`
            : `traczoskar.dev - ${project?.label.pl}`}
        </title>
      </Helmet>
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
            {project?.icon}{" "}
            {isLanguageEN ? project?.label.en : project?.label.pl}
          </ProjectHeader>
          {!isTabletHorizontal && <KeyboardInstruct />}
          <NavigationWrapper>
            <NavigationButton
              onClick={handlePreviousProject}
              disabled={projectIndex <= 0}
              aria-label={
                isLanguageEN ? "Previous Project" : "Poprzedni Projekt"
              }
            >
              {isMobile
                ? "<"
                : isLanguageEN
                ? "Previous Project"
                : "Poprzedni Projekt"}
            </NavigationButton>
            <NavigationButton
              onClick={handleNextProject}
              disabled={projectIndex >= projects.length - 1}
              aria-label={isLanguageEN ? "Next Project" : "Następny Projekt"}
            >
              {isMobile
                ? ">"
                : isLanguageEN
                ? "Next Project"
                : "Następny Projekt"}
            </NavigationButton>
          </NavigationWrapper>
        </HeaderSection>

        {
          //---Description---
        }
        {project?.description && (
          <Section>
            <SectionTitle>
              {isLanguageEN ? "Description" : "Opis"} 🗒
            </SectionTitle>
            <ProjectDescription>
              {isLanguageEN ? project.description.en : project.description.pl}
            </ProjectDescription>
          </Section>
        )}
        {
          //---Screenshots---
        }
        <Section>
          <ScreenshotsWrapper>
            <SectionTitle>
              {isLanguageEN ? "Screenshots" : "Zrzuty ekranu"} 📸
            </SectionTitle>
            <ScreenshotsInstructions>
              {isLanguageEN
                ? "Click on the thumbnail to view the screenshot in a larger size"
                : "Kliknij na miniaturkę aby powiększyć obraz"}{" "}
              🔍
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
            <SectionTitle>
              {isLanguageEN ? "Features" : "Właściwości"} ✅
            </SectionTitle>
            <ProjectFeatureList>
              {(isLanguageEN ? project?.features.en : project?.features.pl).map(
                (feature, index) => (
                  <ProjectFeature key={index}>
                    <ProjectFeatureName>{feature.name}</ProjectFeatureName>
                    {`: ${feature.content}`}
                  </ProjectFeature>
                )
              )}
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
            <LinkButton
              href={project?.repo}
              aria-label={
                isLanguageEN ? "GitHub Respository" : "Repozotyrium GitHub"
              }
              target="_blank"
            >
              <GitHubIcon
                width={isMobile ? 25 : 30}
                height={isMobile ? 25 : 30}
              />
              {isLanguageEN ? "GitHub Repository" : "Repozytorium GitHub"}
            </LinkButton>
            <LinkButton
              href={project?.live}
              aria-label={isLanguageEN ? "Live Demo" : "Wersja demo"}
              target="_blank"
            >
              <LiveIcon
                width={isMobile ? 25 : 30}
                height={isMobile ? 25 : 30}
              />
              {isLanguageEN ? "Live Demo" : "Wersja demo"}
            </LinkButton>
          </ButtonsWrapper>
        </Section>
      </ProjectDetailsContainer>
    </Modal>
  );
};

export default ProjectDetails;
