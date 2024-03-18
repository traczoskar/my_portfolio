import { useState } from "react";
import { projects } from "./portfolioList";
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

export default function PortfolioCards() {
  const [selectedTab, setSelectedTab] = useState(projects[0]);

  return (
    <CardsContainer>
      <Nav>
        <ProjectList>
          {projects.map((project) => (
            <ProjectTab
              key={project.label}
              className={project === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(project)}
            >
              {`${project.label}`}
              {project === selectedTab ? (
                <UnderlineSpan>
                  <motion.div className="underline" layoutId="underline" />
                </UnderlineSpan>
              ) : null}
            </ProjectTab>
          ))}
        </ProjectList>
      </Nav>
      <ProjectContainer>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? (
              <ProjectImage
                to={selectedTab.route}
                src={selectedTab.image}
                alt={selectedTab.label}
              />
            ) : null}
          </motion.div>
        </AnimatePresence>
      </ProjectContainer>
    </CardsContainer>
  );
}
