import { projects } from "../portfolioList";
import { motion, AnimatePresence } from "framer-motion";
import {
  CardsContainer,
  DetailsButton,
  Nav,
  ProjectContainer,
  ProjectImage,
  ProjectList,
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

export default function PortfolioCards() {
  const selectedProject: Project = useSelector(selectSelectedProject);
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);
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
                <DetailsButton>
                  <ProjectLink project={selectedProject}>
                    {isLanguageEN ? "Details" : "Szczegóły"}
                  </ProjectLink>
                </DetailsButton>
              ) : null}
            </ProjectTab>
          ))}
        </ProjectList>
      </Nav>
      <ProjectContainer>
        {selectedProject ? (
          <ProjectLink project={selectedProject}>
            {!isImageLoaded ? (
              <Loader />
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject?.label}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProjectImage
                    src={selectedProject.image}
                    alt={selectedProject.label}
                  />
                </motion.div>
              </AnimatePresence>
            )}
          </ProjectLink>
        ) : null}
      </ProjectContainer>
    </CardsContainer>
  );
}
