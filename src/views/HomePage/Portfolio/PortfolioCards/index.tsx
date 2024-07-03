import { projects } from "../portfolioList";
import { AnimatePresence } from "framer-motion";
import {
  CardsContainer,
  Details,
  DetailsMobile,
  Nav,
  ProjectContainer,
  ProjectIcon,
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
import { useNavigate } from "react-router";
import { openProjectDetails } from "../../../../slices/projectDetailsSlice";

export default function PortfolioCards() {
  const selectedProject: Project = useSelector(selectSelectedProject);
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);
  const isTablet: boolean = useMediaQuery({
    query: `(max-width: 991px)`,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const handleOpenProject = (project: Project) => {
    console.log(`Navigating to /projects/${project.route}`);
    navigate(`/projects/${project.route}`);
    dispatch(openProjectDetails(project.route));
    console.log(`Opened project details for ${project.route}`);
  };

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
              onClick={
                selectedProject === project
                  ? undefined
                  : () => selectProject(project)
              }
            >
              <ProjectIcon>{project?.icon}</ProjectIcon> {project?.label}
              {selectedProject && project === selectedProject ? (
                isTablet ? (
                  <DetailsMobile
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => handleOpenProject(selectedProject)}
                  >
                    ?
                  </DetailsMobile>
                ) : (
                  <Details
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => handleOpenProject(selectedProject)}
                  >
                    {isLanguageEN ? "Details" : "Szczegóły"}
                  </Details>
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
