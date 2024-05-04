import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../common/Modal";
import { projects } from "../../HomePage/Header/PortfolioCards/portfolioList";
import {
  closeProjectDetails,
  selectProjectDetailsState,
} from "../../../slices/projectDetailsSlice";
import { Project } from "../../../types/types";

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
      <h2>{project?.label}</h2>
      <p>{project?.route}</p>
    </Modal>
  );
};

export default ProjectDetails;
