import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../../common/Modal";
import {
  closeProjectDetails,
  selectProjectDetailsState,
} from "../../../../slices/projectDetailsSlice";
import { Project } from "../../../../types/types";
import { projects } from "../PortfolioCards/portfolioList";
import { ProjectDetailsContainer, ProjectHeader } from "./styled";

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
      </ProjectDetailsContainer>
    </Modal>
  );
};

export default ProjectDetails;
