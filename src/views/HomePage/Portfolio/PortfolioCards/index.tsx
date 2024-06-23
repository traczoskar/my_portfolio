import { projects } from "../portfolioList";
import { AnimatePresence } from "framer-motion";
import {
  CardsContainer,
  DetailsButton,
  DetailsButtonMobile,
  Nav,
  ProjectContainer,
  ProjectImage,
  ProjectList,
  ProjectPlaceholder,
  ProjectTab,
} from "./styled";
import ProjectLink from "./ProjectLink";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedProject,
  setSelectedProject,
} from "../../../../slices/selectedProjectSlice";
import { Project } from "../../../../types/types";
import { selectIsLanguageEN } from "../../../../slices/languageSlice";
import { useEffect, useState } from "react";
import Loader from "../../../../common/Loader";
import { useMediaQuery } from "react-responsive";

export default function PortfolioCards() {
  const selectedProject: Project = useSelector(selectSelectedProject);
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);
  const isMobile: boolean = useMediaQuery({
    query: `(max-width: 767px)`,
  });
  const isTablet: boolean = useMediaQuery({
    query: `(max-width: 991px)`,
  });
  const dispatch = useDispatch();
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const selectProject = (project: Project) => {
    dispatch(setSelectedProject(project));
    setIsImageLoaded(false);
  };

  useEffect(() => {
    if (selectedProject) {
      const img = new Image();
      img.src = selectedProject.image;
      img.onload = () => setIsImageLoaded(true);
    }
  }, [selectedProject]);

  return (
    <CardsContainer>
      <Nav>
        <ProjectList>
          {projects?.map((project) => (
            <ProjectTab
              key={project.label}
              className={project === selectedProject ? "selected" : ""}
              onClick={() => selectProject(project)}
            >
              {project?.icon} {project?.label}
              {project === selectedProject ? (
                isTablet ? (
                  <DetailsButtonMobile>
                    <ProjectLink project={selectedProject}>?</ProjectLink>
                  </DetailsButtonMobile>
                ) : (
                  <DetailsButton>
                    <ProjectLink project={selectedProject}>
                      {isLanguageEN ? "Details" : "Szczegóły"}
                    </ProjectLink>
                  </DetailsButton>
                )
              ) : null}
            </ProjectTab>
          ))}
        </ProjectList>
      </Nav>
      <ProjectContainer>
        {selectedProject ? (
          <ProjectLink project={selectedProject}>
            {!isImageLoaded ? (
              <ProjectPlaceholder>
                <Loader />
              </ProjectPlaceholder>
            ) : (
              <AnimatePresence mode="wait">
                <ProjectImage
                  key={selectedProject?.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={selectedProject.image}
                  alt={selectedProject.label}
                />
              </AnimatePresence>
            )}
          </ProjectLink>
        ) : (
          <ProjectPlaceholder>
            <Loader />
          </ProjectPlaceholder>
        )}
      </ProjectContainer>
    </CardsContainer>
  );
}
