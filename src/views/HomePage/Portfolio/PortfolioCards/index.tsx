import { projects } from "../portfolioList";
import { motion, AnimatePresence } from "framer-motion";
import {
  CardsContainer,
  Nav,
  ProjectContainer,
  ProjectImage,
  ProjectList,
  ProjectTab,
  UnderlineSpan,
} from "./styled";
import "./underline.css";
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
              {`${project?.label}`}
              {project === selectedProject ? (
                <UnderlineSpan>
                  <motion.div className="underline" layoutId="underline" />
                </UnderlineSpan>
              ) : null}
            </ProjectTab>
          ))}
        </ProjectList>
      </Nav>
      <ProjectContainer>
        {selectedProject ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject ? selectedProject.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedProject ? (
                <ProjectLink project={selectedProject}>
                  <ProjectImage
                    src={selectedProject.image}
                    alt={selectedProject.label}
                  />
                </ProjectLink>
              ) : null}
            </motion.div>
          </AnimatePresence>
        ) : null}
      </ProjectContainer>
    </CardsContainer>
  );
}
