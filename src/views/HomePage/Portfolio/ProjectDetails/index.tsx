import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../../common/Modal";
import {
  closeProjectDetails,
  selectProjectDetailsState,
} from "../../../../slices/projectDetailsSlice";
import { Project } from "../../../../types/types";
import { projects } from "../PortfolioCards/portfolioList";
import {
  ProjectDescription,
  ProjectDescriptionTitle,
  ProjectDetailsContainer,
  ProjectFeature,
  ProjectFeatureList,
  ProjectFeatureName,
  ProjectHeader,
} from "./styled";

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
        <ProjectHeader>
          {project?.icon} {project?.label}
        </ProjectHeader>
        <ProjectDescriptionTitle>Description:</ProjectDescriptionTitle>
        <ProjectDescription>{project?.description}</ProjectDescription>
        {project?.features && (
          <>
            <ProjectDescriptionTitle>Features:</ProjectDescriptionTitle>
            <ProjectFeatureList>
              {project.features.map((feature, index) => (
                <ProjectFeature key={index}>
                  <ProjectFeatureName>{feature.name}</ProjectFeatureName>
                  {`: ${feature.content}`}
                </ProjectFeature>
              ))}
            </ProjectFeatureList>
          </>
        )}
      </ProjectDetailsContainer>
    </Modal>
  );
};

export default ProjectDetails;
