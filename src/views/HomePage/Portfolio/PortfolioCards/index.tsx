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

export default function PortfolioCards() {
  const selectedProject: Project = useSelector(selectSelectedProject);
  const dispatch = useDispatch();

  const selectProject = (project: Project) => {
    dispatch(setSelectedProject(project));
  };

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
                  <ProjectLink project={selectedProject}>Details</ProjectLink>
                </DetailsButton>
              ) : null}
            </ProjectTab>
          ))}
        </ProjectList>
      </Nav>
      <ProjectContainer>
        {selectedProject ? (
          <ProjectLink project={selectedProject}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject?.label}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {selectedProject ? (
                  <ProjectImage
                    src={selectedProject.image}
                    alt={selectedProject.label}
                  />
                ) : null}
              </motion.div>
            </AnimatePresence>
          </ProjectLink>
        ) : null}
      </ProjectContainer>
    </CardsContainer>
  );
}
